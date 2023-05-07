'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { mainLogo, password, passwordShown } from '@/public';
import { UserService } from '@/src/api/user';
import { Button } from '@/src/components';

import styles from '@/src/app/login/login.module.css';

type TInputsLogin = {
  username: string;
  password: string;
};

// TODO Декомпозировать компонент
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm<TInputsLogin>({ mode: 'all' });

  const [isShown, setIsShown] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<TInputsLogin> = async (data) => {
    const user = await UserService.auth(`${data.username}`, `${data.password}`);
    if (user?.status === 200) {
      setCookie(null, 'access', `${user.data.data.access}`, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      });
      await router.push('/');
    } else {
      setError(`root`, {
        type: 'custom',
        message: 'Неверный логин или пароль'
      });
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.pattern} />
      <div className={styles.wrapper__form}>
        <div className={styles.images}>
          <Image src={mainLogo} alt='Логотип' width={210} height={230} />
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <span
            className={cn(
              styles.errors__wrapper,
              styles.errors__wrapper_center
            )}
          >
            {errors.root && (
              <p className={styles.errors}>{errors.root.message}</p>
            )}
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
              src={isShown ? passwordShown : password}
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
            disabled={!isValid}
          >
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
