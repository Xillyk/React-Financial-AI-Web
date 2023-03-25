import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetKpisResponse, GetProductResponse, GetTransactionsResponse } from './types'

// call endtpoint of backend
export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: "main",
	tagTypes: ["Kpis", "Products", "Transactions"],
	endpoints: (build) =>({
		// api call
		getKpis: build.query<Array<GetKpisResponse>, void>({
			query: () => "kpi/kpis/",
			providesTags: ["Kpis"]
		}),
		getProducts: build.query<Array<GetProductResponse>, void>({
			query: () => "product/products/",
			providesTags: ["Products"]
		}),
		getTransactions: build.query<Array<GetTransactionsResponse>, void>({
			query: () => "transaction/transactions/",
			providesTags: ["Transactions"]
		}),
	})
})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api
