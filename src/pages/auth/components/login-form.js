import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLoginUser } from '@/http/auth.js';
import { selectIsAuth } from '@/store/slices/auth.slice.js';

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      isRemember: false,
    }
  });
  const [isChecked, setCheckStatus] = React.useState(false);
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onCheckStatus = (e) => {
    e.stopPropagation();

    if (e.target.hasAttribute('type')) {
      setCheckStatus(e.target.checked);
    }
  };

  const onSubmit = async (values) => {
    const data = await dispatch(fetchLoginUser(values));

    if (!data.payload) {
      alert('Failed to login');
    }

    if ('token' in data.payload &&  values.isRemember) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />
  }

  const showPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="auth__form-body">
        <div className="auth__form-cell">
          <label className="auth__form-label">Email*</label>

          <input {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                 type="text"
                 placeholder="E-mail"
                 className={errors.email ? 'auth__form-input error' : 'auth__form-input'} />

          {errors.email && errors.email.type === 'required' && (
            <span className="auth__form-error">This field is required</span>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <span className="auth__form-error">Invalid email format</span>
          )}
        </div>

        <div className={isShowPassword ? 'auth__form-cell show' : 'auth__form-cell'}>
          <label className="auth__form-label">Пароль*</label>

          <input {...register('password', {required: true, min: 5})}
                 type={isShowPassword ? 'text' : 'password'}
                 placeholder="Пароль"
                 className={errors.password ? 'auth__form-input error' : 'auth__form-input'} />

          <button className="auth__form-show" type="button" onClick={showPassword}></button>

          {errors.password && errors.password.type === 'required' && (
            <span className="auth__form-error">This field is required</span>
          )}
        </div>
      </div>

      <a href="#" className="auth__form-forget-password">Забули пароль?</a>

      <label className={ isChecked ? 'auth__form-check active' : 'auth__form-check' } onClick={onCheckStatus}>
        Залишити мене в системі
        <input {...register('isRemember')} type="checkbox" />
      </label>

      <div className="auth__form-control">
        <button type="submit" className="auth__form-button">Війти</button>

        <NavLink to="/register" className="auth__form-link">Зареєструватися</NavLink>
      </div>
    </form>
  );
}
