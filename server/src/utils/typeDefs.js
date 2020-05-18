import { gql } from 'apollo-server';

const typeDefs = gql`
  ######## Start of Event Definitions

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

  ######## End of Event Definitions

  ######## Start of User Definitions

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  ######## End of User Definitions

  ######## Start of Queries and Mutations

  type Query {
    getEvents: [Event!]!
    getEventsById(id: ID!): Event!
  }

  type Mutation {
    ## User mutations

    register(username: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): User!

    ## Event mutations

    createEvent(event: EventInput!): Event!
    editEvent(id: ID!, event: EventInput!): Event!
    deleteEvent(id: ID!): DeleteOutput
  }

  ######## End of Queries and Mutations
`;

export default typeDefs;
