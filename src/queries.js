import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
query {
  products(first: 250) {
    edges {
      node {
        id
        title
        handle
        descriptionHtml
        images(first: 1) {
          edges {
            node {
              transformedSrc
            }
          }
        }
      }
    }
  }
}
`;
