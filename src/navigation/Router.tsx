import {NavigationContainer} from '@react-navigation/native';
import {FC, useEffect} from 'react';
import {AuthNavigator, TabNavigator} from './index';
import {SplashScreen} from './SplashScreen';
import {useAppDispatch, useAppSelector} from 'redux/redux-hooks';
import {setUser} from 'redux/slices/userSlice';
import {useSecureStorage} from 'hooks/useSecureStorage';
import {setIsGlobalLoading} from 'redux/slices/globalConfigurationSlice';
import {User} from 'services/api';
import {fillServices} from 'redux/slices/servicesSlice';
import {fillNavigationRoutes} from 'redux/slices/navigationSlice';

export const Router: FC = () => {
  const userState = useAppSelector(state => state.user);
  const {isLoading} = useAppSelector(state => state.globalConfiguration);
  const dispath = useAppDispatch();
  const {getItem} = useSecureStorage();

  const handleOnMountAction = async () => {
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
    dispath(setIsGlobalLoading(false));
  };

  useEffect(() => {
    handleOnMountAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {userState?.token ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
