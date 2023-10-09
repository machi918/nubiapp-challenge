import {StyleSheet} from 'react-native';

export const COMMON_BUTTON_STYLES = StyleSheet.create({
  containerBIG: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    height: 68,
    paddingHorizontal: 20,
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
