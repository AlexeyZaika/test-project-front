import { LogoBlock, RegisterForm } from '@/pages/auth/components';
import { useLocation } from 'react-router-dom';

export function RegisterPage() {
  const location = useLocation();
  const isManager = location.pathname.includes('manager');

  return (
    <main>
      <div className="auth">
        <div className="auth__column">
          <div className="auth__header">
            <h1 className="auth__title">{isManager ? 'Регістрація менеджера' : 'Регістрація'} </h1>
          </div>

          <RegisterForm />

          <div className="auth__copyright">© 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!</div>
        </div>

        <div className="logo-block">
          <LogoBlock />
        </div>
      </div>
    </main>
  );
}
