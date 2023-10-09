import {TextInputProps} from 'react-native';

import {FieldValues, useController, UseControllerProps} from 'react-hook-form';

import {TextFieldBase} from './base/TextFieldBase';

type RHFTextFieldProps<T extends FieldValues> = TextInputProps &
  UseControllerProps<T> & {showText?: boolean; text?: string};

export const RHFTextField = <T extends FieldValues>({
  control,
  name,
  disabled,
  showText = false,
  ...props
}: RHFTextFieldProps<T>) => {
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
      onChangeText={field.onChange}
      editable={formState.isSubmitting || disabled}
      error={!!error}
      helperText={error?.message || (showText ? props?.text : '')}
    />
  );
};
