import { createBrowserRouter } from 'react-router-dom';

import { LoginPage, RegisterPage } from '@/pages/auth';
import {
  BalancePage,
  HomePage,
  ManagerPage,
  OffersPage,
  ProfilePage,
  SupportPage,
  UsersPage,
} from '@/pages/home/index.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/',
        element: <ManagerPage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/offers',
        element: <OffersPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/balance',
        element: <BalancePage />,
      },
      {
        path: '/support',
        element: <SupportPage />,
      }
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/register/manager',
    element: <RegisterPage />,
  },
]);
