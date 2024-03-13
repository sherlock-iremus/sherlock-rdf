
// https://redux-toolkit.js.org/rtk-query/usage/queries

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SparqlQueryResultObject } from './sparql-result'

export const sparqlApi = createApi({
    reducerPath: 'sparqlApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.DEV ? 'http://localhost:3030/iremus/' : 'https://data-iremus.huma-num.fr/sparql/'
    }),
    endpoints: builder => ({
        getSparqlQueryResult: builder.query<SparqlQueryResultObject, string>({
            query: (query: string) => ({
                method: 'POST',
                body: new URLSearchParams({ query }),
            }),
            transformResponse: (_) => _ as SparqlQueryResultObject
        })
    })
})

// export const { useSparqlQuery } = sparqlApi
export const { useGetSparqlQueryResultQuery } = sparqlApi