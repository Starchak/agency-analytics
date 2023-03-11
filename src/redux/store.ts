import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import imagesSlice from '@redux/slice/imagesSlice';
import { imagesApi } from '@redux/api/imagesApi';

export const store = configureStore({
  reducer: { images: imagesSlice, [imagesApi.reducerPath]: imagesApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imagesApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
