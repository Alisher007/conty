import { configureStore } from "@reduxjs/toolkit"
import contactReducer from './contactSlice'
import { apiSlice } from "./apiSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        contacts: contactReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})