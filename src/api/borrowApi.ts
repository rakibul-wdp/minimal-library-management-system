import { baseApi } from "./baseApi";
import type { IBorrow, BorrowSummary } from "../types/types";

export const borrowApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    borrowBook: builder.mutation<
      IBorrow,
      Omit<IBorrow, "_id" | "createdAt" | "updatedAt">
    >({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Borrow", "Book"],
    }),
    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
