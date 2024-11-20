// apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://0gcq3v-wh.myshopify.com//api/2023-10/graphql.json',
    headers: {
      'X-Shopify-Storefront-Access-Token': 'bcb58f6d9a649c7b4e39f359a91eb716', // Replace with your generated token
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
