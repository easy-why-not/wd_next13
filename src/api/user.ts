import { IAuth } from '@/src/api/dto/user.dto';
import { axiosInstance } from '@/src/core/axios';

export const UserService = {
  async auth(username: string, password: string) {
    try {
      const data = await axiosInstance.post<IAuth>('/token/', {
        username,
        password
      });
      return data;
    } catch (e: any | unknown) {
      return e.message;
    }
  }
};
