import * as yup from 'yup';

export const globalEmailSchema = yup
  .string()
  .required('El correo no puede estar vacío.')
  .email('Formato incorrecto')
  .max(50, 'Este campo no puede tener más de 50 caracteres.');

export const passwordSchema = yup
  .string()
  .required('Campo requerido.')
  .max(30, 'Este campo no puede tener más de 30 caracteres.');

// ----------

export const signInValidationSchema = yup.object().shape({
  email: globalEmailSchema,
  password: passwordSchema,
});

export type signInValidationType = Required<
  yup.InferType<typeof signInValidationSchema>
>;

// -------------------------------
