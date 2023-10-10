import {StyleSheet} from 'react-native';

import {DEFAULT_BORDER_RADIUS, DEFAULT_H_PADDING} from '@src/theme';

export const COMMON_BUTTON_STYLES = StyleSheet.create({
  containerBIG: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: DEFAULT_BORDER_RADIUS,
    height: 68,
    paddingHorizontal: DEFAULT_H_PADDING,
  },
  containerMEDIUM: {
    borderRadius: 10,
    height: 54,
  },
  containerSMALL: {
    borderRadius: 10,
    height: 40,
  },
  labelBIG: {
    fontSize: 18,
    marginTop: 2,
    fontFamily: 'Poppins-Bold',
  },
  labelMEDIUM: {
    fontSize: 16,
  },
  labelSMALL: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});
