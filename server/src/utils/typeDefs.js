import { gql } from 'apollo-server';

const typeDefs = gql`
  type Hello {
    world: String!
  }

  type Query {
    hw: Hello
  }
`;

export default typeDefs;
