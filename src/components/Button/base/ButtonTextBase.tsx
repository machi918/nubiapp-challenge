import {FC} from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {COMMON_BUTTON_STYLES} from './constants';

type ButtonProps = TouchableOpacityProps & {
  label: string;
  /**
   * @default size big
   */
  size: 'big' | 'medium' | 'small';
  isLoading: boolean;
};

export const ButtonTextBase: FC<ButtonProps> = ({
  label,
  size = 'big',
  isLoading,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        COMMON_BUTTON_STYLES.containerBIG,
        size === 'medium' && {...COMMON_BUTTON_STYLES.containerMEDIUM},
        size === 'small' && COMMON_BUTTON_STYLES.containerSMALL,
        props.style,
      ]}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={[
            COMMON_BUTTON_STYLES.labelBIG,
            size === 'medium' && COMMON_BUTTON_STYLES.labelMEDIUM,
            size === 'small' && COMMON_BUTTON_STYLES.labelSMALL,
          ]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202BCE',
  },
  label: {
    color: 'white',
  },
});
