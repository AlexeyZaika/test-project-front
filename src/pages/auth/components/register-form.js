import React from 'react';
import { Navigate, NavLink, useLocation  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsAuth } from '@/store/slices/auth.slice.js';
import { fetchRegisterUser } from '@/http/auth.js';

export function RegisterForm() {
  const [isChecked, setCheckStatus] = React.useState(false);
  const [isShowPasswordOne, setIsShowPasswordOne] = React.useState(false);
  const [isShowPasswordTwo, setIsShowPasswordTwo] = React.useState(false);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const location = useLocation();
  const isManager = location.pathname.includes('manager');
  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
      isRemember: false,
      role: isManager ? 'manager' : '',
    }
  });

  const onCheckStatus = (e) => {
    e.stopPropagation();

    if (e.target.hasAttribute('type')) {
      setCheckStatus(e.target.checked);
    }
  };

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegisterUser(values));

    if (!data.payload) {
      alert('Failed to register');
    }

    if ('token' in data.payload &&  values.isRemember) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />
  }

  const showPassword = (value) => {
    value === 'one' ? setIsShowPasswordOne(!isShowPasswordOne) : setIsShowPasswordTwo(!isShowPasswordTwo);
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="auth__form-body">
        {isManager ? <></> : (
          <div className="auth__form-cell">
            <label className="auth__form-label">Виберіть роль*</label>

            <select {...register('role', {required: true})}
                    className={errors.name ? 'auth__form-input error' : 'auth__form-input'}>
              <option value="brand">Бренд</option>
              <option value="afiliat">Користувач</option>
            </select>

            {errors.role && errors.role.type === 'required' && (
              <span className="auth__form-error">Select one option</span>
            )}
          </div>
        )}

        <div className="auth__form-row">
          <div className="auth__form-cell">
            <label className="auth__form-label">Назва*</label>

            <input {...register('name', {required: true, min: 5})}
                   type="text"
                   placeholder="Назва"
                   className={errors.name ? 'auth__form-input error' : 'auth__form-input'} />

            {errors.name && errors.name.type === 'required' && (
              <span className="auth__form-error">This field is required</span>
            )}
            {errors.name && errors.name.type === 'min' && (
              <span className="auth__form-error">The name must be at least 5 characters</span>
            )}
          </div>

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
        </div>

        <div className={isShowPasswordOne ? 'auth__form-cell show' : 'auth__form-cell'}>
          <label className="auth__form-label">Пароль*</label>

          <input {...register('password', {required: true, min: 5})}
                 type={isShowPasswordOne ? 'text' : 'password'}
                 placeholder="Пароль"
                 className={errors.password ? 'auth__form-input error' : 'auth__form-input'} />

          <button className="auth__form-show" type="button" onClick={() => showPassword('one')}></button>

          {errors.password && errors.password.type === 'required' && (
            <span className="auth__form-error">This field is required</span>
          )}
          {errors.password && errors.password.type === 'min' && (
            <span className="auth__form-error">The password must be at least 5 characters</span>
          )}
        </div>

        <div className={isShowPasswordTwo ? 'auth__form-cell show' : 'auth__form-cell'}>
          <label className="auth__form-label">Підтвердьте пароль</label>

          <input {...register('repeatPassword', {required: true})}
                 type={isShowPasswordTwo ? 'text' : 'password'}
                 placeholder="Повторіть пароль"
                 className="auth__form-input" />

          <button className="auth__form-show" type="button" onClick={() => showPassword('two')}></button>

          {getValues('password') !== getValues('repeatPassword') && (
            <span className="auth__form-error">Password mismatch</span>
          )}
        </div>
      </div>

      <label className={ isChecked ? 'auth__form-check active' : 'auth__form-check' } onClick={onCheckStatus}>
        Залишити мене в системі
        <input type="checkbox" />
      </label>

      <div className="auth__form-control">
        <button type="submit" className="auth__form-button">Зареєструватися</button>

        <NavLink to="/login" className="auth__form-link">Я вже зареєстрован</NavLink>
      </div>
    </form>
  );
}
