import {FC} from 'react';

import {FallbackComponentProps} from 'react-native-error-boundary';

import {Button, ScreenView, Text} from '@src/components';
import {CustomLightTheme} from '@src/theme';

export const ErrorBoundaryScreen: FC<FallbackComponentProps> = ({
  resetError,
}) => {
  return (
    <ScreenView
      alignItems="center"
      justifyContent="center"
      bgColor={CustomLightTheme.colors.primary}>
      <Text color={CustomLightTheme.colors.card} fontSize={20}>
        ¡Ha ocurrido un error inesperado!
      </Text>
      <Button
        label="Reintentar"
        size="big"
        type="contained"
        onPress={resetError}
      />
    </ScreenView>
  );
};
