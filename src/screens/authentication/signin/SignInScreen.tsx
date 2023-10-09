import {FC} from 'react';
import {View, Text, Button} from 'react-native';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

import {useAppDispatch} from 'redux/redux-hooks';
import {modifyUser} from 'redux/slices/userSlice';
import {RHFPasswordField, RHFTextField} from 'components/input-fields';

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
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
      }}>
      <Text>LOGIN</Text>
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
        title="Go to Details"
        onPress={handleSubmit(async values => {
          await handleFormSubmit(values);
        })}
        disabled={formState.isSubmitting}
      />
    </View>
  );
};
