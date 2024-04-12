import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '@/store/slices/auth.slice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
