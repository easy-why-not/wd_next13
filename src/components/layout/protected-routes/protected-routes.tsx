'use client';

import { useRouter } from 'next/navigation';
import { FC, JSX, PropsWithChildren, useEffect } from 'react';

import { getUser } from '@/api/user';
import { useUser } from '@/store/user.store';

export const ProtectedRoutes: FC<PropsWithChildren> = ({
  children
}): JSX.Element => {
  const router = useRouter();
  const saveUser = useUser((state) => state.saveUser);

  useEffect(() => {
    getUser()
      .then((res) => {
        saveUser(res);
      })
      .then(() => router.push('/'))
      .catch(() => router.push('/sign-in'));
  }, [router, saveUser]);

  return <>{children}</>;
};
