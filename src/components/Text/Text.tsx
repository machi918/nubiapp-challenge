import {FC} from 'react';
import {Text as RNText, StyleSheet, TextProps, TextStyle} from 'react-native';

import {useTheme} from '@react-navigation/native';

type Props = TextProps & {
  /**
   *@default  textType regular
   */
  textType?: 'bold' | 'medium' | 'regular';
  primaryColor?: boolean;
  color?: TextStyle['color'];
  fontSize?: TextStyle['fontSize'];
};

export const Text: FC<Props> = ({
  textType = 'regular',
  primaryColor = false,
  color,
  fontSize,
  ...props
}) => {
  const {colors} = useTheme();

  return (
    <RNText
      {...props}
      style={[
        props.style,
        style.default,
        textType === 'bold' && style.bold,
        textType === 'medium' && style.medium,
        !!color && {color},
        !!fontSize && {fontSize},
        primaryColor && {color: colors.primary},
      ]}>
      {props?.children}
    </RNText>
  );
};

const style = StyleSheet.create({
  bold: {fontFamily: 'Poppins-Bold'},
  medium: {fontFamily: 'Poppins-Medium'},
  default: {fontFamily: 'Poppins-Regular', color: '#000000'},
});
