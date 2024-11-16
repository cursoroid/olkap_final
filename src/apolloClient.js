// apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://kollkap.myshopify.com/api/2023-10/graphql.json', // Replace with your store's API URL
    headers: {
      'X-Shopify-Storefront-Access-Token': 'a0e854bda56c30ae89a24dec4ecd69e5', // Replace with your generated token
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
