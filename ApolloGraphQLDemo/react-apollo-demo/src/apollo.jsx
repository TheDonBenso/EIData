import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'https://graphql-pokemon.now.sh/' });

export default AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);