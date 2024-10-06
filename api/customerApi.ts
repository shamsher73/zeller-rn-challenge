import { ListZellerCustomers } from '@/api/graphql/queries';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import awsconfig from '@/aws-exports';
import { QueryResponse, Customer } from '@/types';
import { setListItems } from '@/core/reducers/customerSlice';

export const customerApi = createApi({
    baseQuery: graphqlRequestBaseQuery({
        url: awsconfig.aws_appsync_graphqlEndpoint,
        requestHeaders: {
            'x-api-key': awsconfig.aws_appsync_apiKey,
        },
    }),
    tagTypes: [],
    endpoints: (builder) => ({
        getCustomer: builder.query<Customer[], void>({
            query: () => ({
                document: ListZellerCustomers,
            }),
            transformResponse: (response: QueryResponse) => response.listZellerCustomers.items,
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled
                dispatch(setListItems(data))
            }
        }),
    }),
});

// Export hooks for usage in functional components
export const { useGetCustomerQuery, useLazyGetCustomerQuery } = customerApi;
