import { LogoBlock, LoginForm } from '@/pages/auth/components';

export function LoginPage() {
  return (
    <main>
      <div className="auth">
        <div className="auth__column">
          <div className="auth__header">
            <h1 className="auth__title">Вхід</h1>

            <div className="auth__subtitle">Введіть адресу електронної пошти та пароль для входу!</div>
          </div>

          <LoginForm />

          <div className="auth__copyright">© 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!</div>
        </div>

        <div className="logo-block">
          <LogoBlock />
        </div>
      </div>
    </main>
  );
}
