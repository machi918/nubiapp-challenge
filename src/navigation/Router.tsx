import {NavigationContainer} from '@react-navigation/native';
import {FC, useEffect} from 'react';
import {AuthNavigator, TabNavigator} from './index';
import {SplashScreen} from './SplashScreen';
import {useAppDispatch, useAppSelector} from 'redux/redux-hooks';
import {modifyUser} from 'redux/slices/userSlice';
import {useSecureStorage} from 'hooks/useSecureStorage';
import {setIsGlobalLoading} from 'redux/slices/globalConfigurationSlice';

export const Router: FC = () => {
  const userState = useAppSelector(state => state.user);
  const {isLoading} = useAppSelector(state => state.globalConfiguration);
  const dispath = useAppDispatch();
  const {getItem} = useSecureStorage();

  const handleOnMountAction = async () => {
    const currentToken = await getItem('token');
    console.log('Current Token:', currentToken);
    if (currentToken) {
      dispath(modifyUser({token: currentToken}));
    }
    dispath(setIsGlobalLoading(false));
  };

  useEffect(() => {
    handleOnMountAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    console.log('SplashScreen rendered');
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {userState?.token ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
