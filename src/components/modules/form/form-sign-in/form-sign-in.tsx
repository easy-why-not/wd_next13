'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { signIn } from '@/api/user';
import { Button } from '@/components/elements/button/button';
import { Spinner } from '@/components/elements/spinner/spinner';
import { useUser } from '@/store/user.store';

import styles from './form-sign-in.module.css';

interface TInputsLogin {
  username: string;
  password: string;
}

export const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting }
  } = useForm<TInputsLogin>({ mode: 'all' });

  const saveUser = useUser((state) => state.saveUser);

  const [isShown, setIsShown] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<TInputsLogin> = async (data) => {
    try {
      const { username, password } = data;
      const user = await signIn({ username, password });
      setCookie(null, 'access', `${user.data.access}`, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      });
      saveUser(user.data);
      await router.push('/');
    } catch (e: any | unknown) {
      setError(`root`, {
        type: 'custom',
        message: 'Неверный логин или пароль'
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <span
        className={cn(styles.errors__wrapper, styles.errors__wrapper_center)}
      >
        {errors.root && <p className={styles.errors}>{errors.root.message}</p>}
      </span>
      <label className={styles.wrapper__input} htmlFor='email'>
        <p className={styles.label}>Логин</p>
        <input
          className={styles.input}
          {...register('username', {
            required: 'Поле обязательно для заполнения',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Введите email адрес'
            }
          })}
          placeholder='Введите логин'
          id='email'
          type='email'
        />
      </label>
      <span className={styles.errors__wrapper}>
        {errors?.username && (
          <p className={styles.errors}>{errors?.username?.message}</p>
        )}
      </span>
      <label className={styles.wrapper__input} htmlFor='password'>
        <p className={styles.label}>Пароль</p>
        <input
          className={styles.input}
          {...register('password', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать минимум 6 символов'
            }
          })}
          placeholder='Введите пароль'
          id='password'
          type={isShown ? 'text' : 'password'}
        />
        <Image
          className={styles.password_icon}
          src={isShown ? '/images/password.svg' : '/images/passwordShown.svg'}
          alt='Показать пароль'
          width={20}
          height={20}
          onMouseDown={() => setIsShown(true)}
          onMouseUp={() => setIsShown(false)}
          onMouseLeave={() => setIsShown(false)}
        />
      </label>
      <span className={styles.errors__wrapper}>
        {errors?.password && (
          <p className={styles.errors}>{errors?.password?.message}</p>
        )}
      </span>
      <Button
        className={styles.button}
        appearance='primary'
        size='large'
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? <Spinner /> : 'Войти'}
      </Button>
    </form>
  );
};
