'use client';

import { FC, JSX } from 'react';

import { useUser } from '@/store/user.store';

export const Home: FC = (): JSX.Element => {
  const user = useUser((state) => state.user);
  console.log(user);
  return <h1>cdcdcdcd</h1>;
};
