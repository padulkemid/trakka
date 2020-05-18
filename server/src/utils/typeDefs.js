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

  type DeleteOutput {
    result: String!
  }

  type Query {
    getEvents: [Event!]!
    getEventsById(id: ID!): Event!
  }

  type Mutation {
    createEvent(event: EventInput!): Event!
    deleteEvent(id: ID!): DeleteOutput
  }
`;

export default typeDefs;
