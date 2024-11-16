// Test.jsx
import React from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import client from './apolloClient'; // Import the Apollo Client
import { GET_PRODUCTS } from './queries'; // Import the GraphQL query

const Test = () => {
  // Fetch products from Shopify
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="test">
      <h1>Shopify Products</h1>
      <div className="products-list">
        {data.products.edges.map(({ node }) => (
          <div key={node.id} className="product-card">
            <img
              src={node.images.edges[0]?.node.transformedSrc}
              alt={node.title}
              className="product-image"
            />
            <h3>{node.title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: node.descriptionHtml }}
              className="product-description"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <Test />
  </ApolloProvider>
);

export default App;
