import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import * as UserDTO from '@/api/dto/user.dto';

interface IUserState {
  user: UserDTO.IUserDto | null;
  saveUser: (user: UserDTO.IUserDto) => void;
  removeUser: () => void;
}

export const useUser = create<IUserState>()(
  devtools(
    immer((set) => ({
      user: null,
      saveUser: (user) => set(() => ({ user })),
      removeUser: () => set({ user: null })
    }))
  )
);
