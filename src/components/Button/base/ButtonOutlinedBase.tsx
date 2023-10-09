import {FC} from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {COMMON_BUTTON_STYLES} from './constants';

type ButtonProps = TouchableOpacityProps & {
  label: string;
  /**
   * @default size big
   */
  size: 'big' | 'medium' | 'small';
};

export const ButtonOutlinedBase: FC<ButtonProps> = ({
  label,
  size = 'big',
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        COMMON_BUTTON_STYLES.containerBIG,
        size === 'medium' && COMMON_BUTTON_STYLES.containerMEDIUM,
        size === 'small' && COMMON_BUTTON_STYLES.containerSMALL,
        props.style,
      ]}>
      <Text
        style={[
          styles.label,
          COMMON_BUTTON_STYLES.labelBIG,
          size === 'medium' && COMMON_BUTTON_STYLES.labelMEDIUM,
          size === 'small' && COMMON_BUTTON_STYLES.labelSMALL,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#202BCE',
    borderWidth: 1,
    borderRadius: 14,
    height: 60,
  },
  label: {
    color: '#202BCE',
    margin: 0,
    padding: 0,
  },
});
