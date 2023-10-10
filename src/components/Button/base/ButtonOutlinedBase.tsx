import {FC} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {CustomLightTheme, DEFAULT_BORDER_RADIUS} from '@src/theme';

import {COMMON_BUTTON_STYLES} from './constants';

type ButtonProps = TouchableOpacityProps & {
  label: string;
  /**
   * @default size big
   */
  size?: 'big' | 'medium' | 'small';
  isLoading: boolean;
};

export const ButtonOutlinedBase: FC<ButtonProps> = ({
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
        size === 'medium' && COMMON_BUTTON_STYLES.containerMEDIUM,
        size === 'small' && COMMON_BUTTON_STYLES.containerSMALL,
        props.style,
      ]}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={[
            styles.label,
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
    backgroundColor: '#FFFFFF',
    borderColor: CustomLightTheme.colors.primary,
    borderWidth: 1,
    borderRadius: DEFAULT_BORDER_RADIUS,
    height: 60,
  },
  label: {
    color: CustomLightTheme.colors.primary,
    margin: 0,
    padding: 0,
  },
});
