export interface ILogin {
  email: string;
  password: string;
}

// export interface IRegister {
//   email: string;
//   password: string;
//   username: string;
//   phone: string;
//   avatar?: string;
//   isVerified?: boolean;
//   role?: string;
// }

export interface IDeviceInfo {
  device: string;
  os: string;
  browser: string;
  time: Date;
}
export interface IRegister {
  username: string;
  email: string;
  phone: number;
  confirmPassword: string;
  avatar?: string;
  password: string;
  deviceInfo?: IDeviceInfo[];
}
