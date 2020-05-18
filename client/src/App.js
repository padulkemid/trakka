import React from 'react';
import './App.css';
import Nav from './components/Navigation'
import {ApolloProvider} from '@apollo/react-hooks'
import client from './services/graphql'

function App() {
  return (
    <ApolloProvider client={client}>
      <Nav/>
    </ApolloProvider>
  );
}

export default App;
