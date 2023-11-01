import { apiSlice } from "./apiSlice";


export const contactApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getContact: builder.query({
            query: () => {
                const url = `/api/?results=2&nat=us`;
                return url;
              },
            providesTags: ['Contacts']
        }),
    })
})

export const {
    useGetContactQuery,
} = contactApiSlice