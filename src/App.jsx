import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '@/App.scss';
import { router } from '@/router.js';
import { fetchAuthMe } from '@/http/auth.js';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      dispatch(fetchAuthMe());
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
