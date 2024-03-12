// https://redux-toolkit.js.org/rtk-query/usage/queries

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SparqlResultObject } from './sparql-result'

export const sparqlApi = createApi({
    reducerPath: 'sparqlApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://data-iremus.huma-num.fr/sparql'
    }),
    endpoints: (build) => ({
        sparql: build.query<SparqlResultObject, string>({
            query: (query: string) => ({
                url: '/',
                method: 'POST',
                body: new URLSearchParams({ query }),
            })
        })
    })
})

export const { useSparqlQuery } = sparqlApi