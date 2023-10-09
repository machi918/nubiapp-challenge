import {FC} from 'react';
import {TouchableOpacityProps} from 'react-native';

import {ButtonOutlinedBase} from './base/ButtonOutlinedBase';
import {ButtonContainedBase} from './base/ButtonContainedBase';
import {ButtonTextBase} from './base/ButtonTextBase';

type ButtonProps = TouchableOpacityProps & {
  label: string;
  /**
   * @default type contained
   */
  type: 'contained' | 'outlined' | 'text';
  /**
   * @default size big
   */
  size: 'big' | 'medium' | 'small';
  isLoading?: boolean;
};

export const Button: FC<ButtonProps> = ({
  label,
  type,
  size,
  isLoading = false,
  ...props
}) => {
  switch (type) {
    case 'outlined':
      return (
        <ButtonOutlinedBase
          label={label}
          size={size}
          {...props}
          isLoading={isLoading}
        />
      );
    case 'text':
      return (
        <ButtonTextBase
          label={label}
          size={size}
          {...props}
          isLoading={isLoading}
        />
      );

    default:
      return (
        <ButtonContainedBase
          label={label}
          size={size}
          isLoading={isLoading}
          {...props}
        />
      );
  }
};
