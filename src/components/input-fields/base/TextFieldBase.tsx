import {ForwardedRef, forwardRef, LegacyRef} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

type TextFieldBaseProps = TextInputProps & {
  error?: boolean;
  helperText?: string;
  ref?: ForwardedRef<TextInput>;
};

export const TextFieldBase = forwardRef(
  ({...props}: TextFieldBaseProps, ref) => {
    return (
      <View style={styles.container}>
        <TextInput {...props} ref={ref as LegacyRef<TextInput>} />
        <Text style={[styles.helperText, props?.error && styles.errorText]}>
          {props?.helperText}
        </Text>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
  },
  helperText: {
    fontSize: 12,
    color: 'black',
  },
  errorText: {
    color: 'red',
  },
});
