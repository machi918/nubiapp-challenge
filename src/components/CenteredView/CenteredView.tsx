import {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export const CenteredView: FC<ViewProps> = ({...props}) => {
  return (
    <View {...props} style={[props?.style, style.container]}>
      {props?.children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
});
