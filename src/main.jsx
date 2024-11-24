import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import './index.css';
import App from './App.jsx';

import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Import the Apollo client

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <HashRouter> {/* Wrap with HashRouter */}
        <App />
      </HashRouter>
    </ApolloProvider>
  </StrictMode>
);
