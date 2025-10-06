import { LoginDto } from '../dto/login.dto';

export interface UserResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  access_token?: string;
}

export interface IAuthService {
  login(loginDto: LoginDto): Promise<UserResponse>;
}
