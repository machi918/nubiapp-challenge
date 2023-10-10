import {UserMovement} from './user-types';

export type ServicesType = {
  id?: string;
  title: string;
  icon: string;
};

export type SignInType = {
  email: string;
  name: string;
  lastName: string;
  services: string[];
  navigation: string[];
  movements: UserMovement[];
  iat: number;
};
