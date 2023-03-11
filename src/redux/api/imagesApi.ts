import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://agencyanalytics-api.vercel.app/';

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getImages: builder.query<IImage[], void>({
      query: () => `images.json`,
    }),
  }),
});

export const { useGetImagesQuery } = imagesApi;
