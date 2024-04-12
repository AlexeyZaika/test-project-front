import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HorizontalMenu, Logo, VerticalMenu } from '@/pages/home/components/index.js';
import { selectIsAuth } from '@/store/slices/auth.slice.js';

export function HomePage() {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth]);

  return (
    <main>
      <div className="wrapper">
        <aside className="aside">
          <Logo />

          <VerticalMenu />
        </aside>

        <div className="main-body">
          <HorizontalMenu />

          <Outlet></Outlet>
        </div>
      </div>
    </main>
  )
}
