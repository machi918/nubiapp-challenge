import jwt_decode from 'jwt-decode';

import {SignInType} from '@src/types';

import service from '../axios-instance';
import {JWTType} from '../config-types';

const PATH = {
  signIn: '/login',
  signOut: '/signout',
  renewToken: '/renew-token',
};
export abstract class User {
  static signIn = async (loginData: any): Promise<JWTType> => {
    const response = await service.get(PATH.signIn, loginData);
    return response.data;
  };

  static signOut = async (loginData: any) => {
    const response = await service.post(PATH.signOut, loginData);
    return response.data;
  };

  static renewToken = async (data: any) => {
    const response = await service.post(PATH.renewToken, data);
    return response.data;
  };

  static decodeJWT = async (token: string) => {
    const response: SignInType = await jwt_decode(token);
    return response;
  };
}
