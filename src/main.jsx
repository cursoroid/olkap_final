import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Import the Apollo client

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter> {/* Wrap with BrowserRouter */}
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);
