import {FC, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import ErrorBoundary from 'react-native-error-boundary';

import {useSecureStorage} from '@src/hooks';
import {useAppDispatch, useAppSelector} from '@src/redux/redux-hooks';
import {setIsGlobalLoading} from '@src/redux/slices/globalConfigurationSlice';
import {fillNavigationRoutes} from '@src/redux/slices/navigationSlice';
import {fillServices} from '@src/redux/slices/servicesSlice';
import {setUser} from '@src/redux/slices/userSlice';
import {ErrorBoundaryScreen} from '@src/screens/misc';
import {User} from '@src/services/api';
import {CustomLightTheme} from '@src/theme';

import {SplashScreen} from './SplashScreen';

import {AuthNavigator, TabNavigator} from './index';

export const Router: FC = () => {
  const userState = useAppSelector(state => state.user);
  const {isLoading} = useAppSelector(state => state.globalConfiguration);
  const dispath = useAppDispatch();
  const {getItem} = useSecureStorage();

  const handleOnMountAction = async () => {
    try {
      const currentToken = await getItem('token');
      if (currentToken) {
        const userData = await User.decodeJWT(currentToken);
        dispath(setUser({...userData, token: currentToken}));
        const servicesDummyData = userData?.services?.map(item => {
          return {id: Math.random().toString(), title: item, icon: 'none'};
        });
        dispath(fillServices(servicesDummyData));
        dispath(
          fillNavigationRoutes(
            userData?.navigation?.map(item => item?.toLowerCase()) ?? [],
          ),
        );
      }
      // dispath(setIsGlobalLoading(false));
    } catch (error) {
      // Should launch an Alert or Modal
    } finally {
      dispath(setIsGlobalLoading(false));
    }
  };

  useEffect(() => {
    handleOnMountAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryScreen}>
      <NavigationContainer theme={CustomLightTheme}>
        {userState?.token ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </ErrorBoundary>
  );
};
