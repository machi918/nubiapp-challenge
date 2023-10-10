import {FC, ReactNode} from 'react';
import {
  FlexStyle,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ScreenViewProps = ViewProps & {
  children: ReactNode;
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
  flexDirection?: FlexStyle['flexDirection'];
  bgColor?: ViewStyle['backgroundColor'];
};

export const ScreenView: FC<ScreenViewProps> = ({
  children,
  justifyContent,
  alignItems,
  bgColor,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[
        styles.container,
        {
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          {...props}
          style={[
            styles.inner,
            props.style,
            !!justifyContent && {justifyContent},
            !!alignItems && {alignItems},
            !!bgColor && {backgroundColor: bgColor},
          ]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
});
