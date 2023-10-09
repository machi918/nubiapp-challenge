import {StyleSheet, TextInputProps} from 'react-native';

import {FieldValues, useController, UseControllerProps} from 'react-hook-form';

import {TextFieldBase} from './base/TextFieldBase';

type RHFPasswordFieldProps<T extends FieldValues> = TextInputProps &
  UseControllerProps<T> & {
    showText?: boolean;
    text?: string;
    showPassword?: boolean;
  };

export const RHFPasswordField = <T extends FieldValues>({
  control,
  name,
  disabled,
  showText = false,
  showPassword = false,
  ...props
}: RHFPasswordFieldProps<T>) => {
  const {
    field: {ref: fieldReference, ...field},
    fieldState: {error},
    formState,
  } = useController({control, name});

  return (
    <TextFieldBase
      {...field}
      {...props}
      ref={fieldReference}
      style={styles.input}
      textContentType="password"
      secureTextEntry={!showPassword}
      onChangeText={field.onChange}
      editable={formState.isSubmitting || disabled}
      error={!!error}
      helperText={error?.message || (showText ? props?.text : '')}
    />
  );
};

const styles = StyleSheet.create({
  input: {borderBottomWidth: 1, borderBottomColor: 'black'},
});
