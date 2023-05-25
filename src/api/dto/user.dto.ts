export interface IUserDto {
  refresh: string;
  access: string;
  username: string;
  full_name: string;
  email: string;
  memberOf: string[];
}

export interface IUserRequestDto {
  username: string;
  password: string;
}
