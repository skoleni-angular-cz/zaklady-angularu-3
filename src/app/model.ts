export enum UserGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export interface UserBasicInfoDto {
  isAdmin: boolean;
  username: string;
  email: string;
}

export interface UserAddressDto {
  street: string;
  city: string;
  country: string;
}

export interface UserAdvancedInfoDto {
  firstName: string;
  lastName: string;
  gender: UserGender;
  address: UserAddressDto;
  age: number;
}
