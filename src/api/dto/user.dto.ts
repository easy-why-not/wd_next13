export interface IAuthData {
  refresh: string;
  access: string;
  username: string;
  full_name: string;
  email: string;
  memberOf: string[];
  ci: string[];
}

export interface IAuth {
  Success: string;
  data: IAuthData;
}
