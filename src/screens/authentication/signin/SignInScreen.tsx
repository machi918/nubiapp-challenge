import {FC} from 'react';
import {View, Text} from 'react-native';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

import {useAppDispatch} from 'redux/redux-hooks';
import {modifyUser} from 'redux/slices/userSlice';
import {RHFPasswordField, RHFTextField} from 'components/input-fields';
import {Button} from 'components';

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Requerido')
    .email('Formato incorrecto')
    .max(30, 'Este campo no puede tener más de 30 caracteres.'),
  password: yup
    .string()
    .required('Requerido')
    .max(99, 'Este campo no puede tener más de 99 caracteres.'),
});

export type signInValidationType = Required<
  yup.InferType<typeof signInValidationSchema>
>;

const defaultValues: signInValidationType = {
  email: '',
  password: '',
};

export const SignInScreen: FC = () => {
  const dispath = useAppDispatch();

  const {handleSubmit, control, formState} = useForm<signInValidationType>({
    defaultValues: defaultValues,
    resolver: yupResolver(signInValidationSchema),
  });

  const handleFormSubmit = async (data: signInValidationType) => {
    const {email, password} = data;
    console.log('LOGIN data:', email, password);
    dispath(modifyUser({token: 'asdasdasdasd'}));
  };

  return (
    <View
      style={{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#202BCE',
      }}>
      <View
        style={{
          height: '20%',
          paddingHorizontal: 10,
          paddingTop: 20,
        }}>
        <Text
          style={{fontFamily: 'Poppins-Bold', fontSize: 40, color: 'white'}}>
          logo nubi
        </Text>
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
        }}>
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
          label="Iniciar Sesión"
          type="contained"
          size="big"
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
        <Button
          label="¿No tenés cuenta? Regístrate"
          type="contained"
          size="medium"
          style={{marginTop: 10}}
          onPress={() => console.log('TOCO CUENTA')}
          disabled={formState.isSubmitting}
        />
        <Button
          label="Cargá plata"
          type="contained"
          size="small"
          style={{marginTop: 10}}
          onPress={() => console.log('TOCO CUENTA')}
          disabled={formState.isSubmitting}
        />
      </View>
    </View>
  );
};
