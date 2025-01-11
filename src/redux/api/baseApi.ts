import { BACKEND_SERVER_URL } from '@/utils/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
 reducerPath: 'api',
 baseQuery: fetchBaseQuery({ baseUrl: BACKEND_SERVER_URL }),
 endpoints: (builder) => ({
  getBlogs: builder.query({
   query: () => "/blogs"
  }),
 }),
})

export const { useGetBlogsQuery } = baseApi
