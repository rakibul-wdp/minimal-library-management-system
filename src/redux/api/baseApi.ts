import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/posts",
    }),
  }),
});
