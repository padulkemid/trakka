import { gql } from 'apollo-server';

const typeDefs = gql`
  type Event {
    id: ID!
    title: String!
    description: String!
    timestamp: String!
  }

  input EventInput {
    title: String!
    description: String!
  }

  type Query {
    getEvents: [Event!]!
  }

  type Mutation {
    createEvent(event: EventInput): Event
  }
`;

export default typeDefs;
