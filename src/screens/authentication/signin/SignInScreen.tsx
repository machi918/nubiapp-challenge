import {FC} from 'react';
import {View, Text} from 'react-native';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {useAppDispatch} from 'redux/redux-hooks';
import {setUser} from 'redux/slices/userSlice';
import {RHFPasswordField, RHFTextField} from 'components/input-fields';
import {Button} from 'components';
import {User} from 'services/api';
import {fillServices} from 'redux/slices/servicesSlice';
import {useSecureStorage} from 'hooks/useSecureStorage';
import {fillNavigationRoutes} from 'redux/slices/navigationSlice';
import {signInValidationSchema, signInValidationType} from 'services/schemas';
import {CompleteLogoIcon} from 'assets/icons';

const defaultValues: signInValidationType = {
  email: '',
  password: '',
};

export const SignInScreen: FC = () => {
  const dispath = useAppDispatch();
  const {setItem} = useSecureStorage();

  const {handleSubmit, control, formState} = useForm<signInValidationType>({
    defaultValues: defaultValues,
    resolver: yupResolver(signInValidationSchema),
  });

  const handleFormSubmit = async (data: signInValidationType) => {
    const response = await User.signIn(data);
    const userData = await User.decodeJWT(response?.JWT);
    if (userData) {
      dispath(setUser({...userData, token: response?.JWT}));
      const servicesDummyData = userData?.services?.map(item => {
        return {id: Math.random().toString(), title: item, icon: 'none'};
      });
      dispath(fillServices(servicesDummyData));
      dispath(
        fillNavigationRoutes(
          userData?.navigation?.map(item => item?.toLowerCase()) ?? [],
        ),
      );
      await setItem('token', response?.JWT);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#202BCE',
      }}>
      <View
        style={{
          height: '20%',
          paddingHorizontal: 10,
          paddingTop: 20,
          justifyContent: 'space-evenly',
        }}>
        <CompleteLogoIcon fill={'#FFFFFF'} />
        <Text
          style={{fontFamily: 'Poppins-Bold', fontSize: 20, color: 'white'}}>
          ¡Hola!
        </Text>
      </View>
      <View
        style={{
          height: '80%',
          backgroundColor: 'white',
          borderTopRightRadius: 14,
          borderTopLeftRadius: 14,
          paddingVertical: 16,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <View>
          <RHFTextField
            control={control}
            name="email"
            placeholder="Correo electrónico"
          />
          <RHFPasswordField
            control={control}
            name="password"
            placeholder="Contraseña"
          />
        </View>
        <View>
          <Button
            label="Iniciar Sesión"
            type="contained"
            size="big"
            isLoading={formState.isSubmitting || formState.isLoading}
            onPress={handleSubmit(async values => {
              await handleFormSubmit(values);
            })}
            disabled={formState.isSubmitting}
          />
          <Button
            label="¿No tenés cuenta? Regístrate"
            type="outlined"
            size="big"
            style={{marginTop: 10}}
            onPress={() => console.log('TOCO CUENTA')}
            disabled={formState.isSubmitting}
          />
        </View>
      </View>
    </View>
  );
};
