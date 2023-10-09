import RNSInfo from 'react-native-sensitive-info';

export const useSecureStorage = () => {
  const getItem = async (key: string) => {
    return RNSInfo.getItem(key, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    });
  };

  const getAllItems = async () => {
    return RNSInfo.getAllItems({
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    });
  };

  const setItem = async (key: string, value: any) => {
    return RNSInfo.setItem(key, value, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    });
  };

  const removeItem = async () => {
    return RNSInfo.deleteItem('key1', {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    });
  };

  const isSensorAvailable = async () => {
    return RNSInfo.isSensorAvailable();
  };

  const hasEnrolledFingerprints = async () => {
    return RNSInfo.hasEnrolledFingerprints();
  };

  return {
    getItem,
    getAllItems,
    setItem,
    removeItem,
    isSensorAvailable,
    hasEnrolledFingerprints,
  };
};
