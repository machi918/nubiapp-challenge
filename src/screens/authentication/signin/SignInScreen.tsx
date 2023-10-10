import {FC} from 'react';
import {View} from 'react-native';

import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {CompleteLogoIcon} from '@src/assets';
import {
  Button,
  RHFPasswordField,
  RHFTextField,
  ScreenView,
  Text,
} from '@src/components';
import {useSecureStorage} from '@src/hooks';
import {AuthStackParamList} from '@src/navigation';
import {useAppDispatch} from '@src/redux/redux-hooks';
import {fillNavigationRoutes} from '@src/redux/slices/navigationSlice';
import {fillServices} from '@src/redux/slices/servicesSlice';
import {setUser} from '@src/redux/slices/userSlice';
import {User} from '@src/services/api';
import {
  signInValidationSchema,
  signInValidationType,
} from '@src/services/schemas';

import {styles} from './styles';

type NavProps = NativeStackNavigationProp<AuthStackParamList>;

const defaultValues: signInValidationType = {
  email: '',
  password: '',
};

export const SignInScreen: FC = () => {
  const dispath = useAppDispatch();
  const {setItem} = useSecureStorage();
  const {colors} = useTheme();
  const navigation = useNavigation<NavProps>();

  const {handleSubmit, control, formState} = useForm<signInValidationType>({
    defaultValues: defaultValues,
    resolver: yupResolver(signInValidationSchema),
  });

  const handleFormSubmit = async (data: signInValidationType) => {
    try {
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
    } catch (error) {
      // Should launch an Alert or Modal
    }
  };

  return (
    <ScreenView bgColor={colors.primary}>
      <View style={styles.topContainer}>
        <CompleteLogoIcon fill={'#FFFFFF'} />
        <Text textType="bold" fontSize={20} color="#FFFFFF">
          ¡Hola!
        </Text>
      </View>
      <View style={styles.contentContainer}>
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
          <Button
            label="¿Te olvidaste la contraseña?"
            type="text"
            size="small"
            style={styles.buttonTextStyles}
            onPress={() => navigation.navigate('ForgetPasswordScreen')}
            disabled={formState.isSubmitting}
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
            style={styles.buttonStyles}
            onPress={() => navigation.navigate('SignUpScreen')}
            disabled={formState.isSubmitting}
          />
        </View>
      </View>
    </ScreenView>
  );
};
