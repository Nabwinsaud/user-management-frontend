export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  username: string;
  phone: string;
  avatar?: string;
  isVerified?: boolean;
  role?: string;
}
