import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_auth_url, api_key } from "../firebase/auth";

/* 
Este fragmento de código está creando un API slice mediante Redux Toolkit Query para controlar la autenticación
relacionada a solicitudes de API.  
*/
export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_auth_url}),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signUp?key=${api_key}`,
                method: 'POST',
                body: auth,
            })
        }),
        login: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signInWithPassword?key=${api_key}`,
                method: 'POST',
                body: auth,
            })
        }),
    }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;