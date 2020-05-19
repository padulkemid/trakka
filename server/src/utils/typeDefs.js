import { gql } from 'apollo-server';

const typeDefs = gql`
  ######## Start of Event Definitions

  type Event {
    id: ID!
    email: String!
    title: String!
    description: String!
    timestamp: String!
  }

  input EventInput {
    title: String!
    description: String!
    timestamp: String!
  }

  ######## End of Event Definitions

  ######## Start of User Definitions

  input UserRegister {
    username: String!
    email: String!
    password: String!
  }

  input UserLogin {
    email: String!
    password: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  ######## End of User Definitions

  ######## Start of Queries and Mutations

  type ResultOutput {
    result: String!
  }

  type Query {
    getEvents: [Event!]!
    getEventsById(id: ID!): Event!
  }

  type Mutation {
    ## User mutations

    register(input: UserRegister!): ResultOutput!
    login(input: UserLogin!): ResultOutput!
    logout: ResultOutput!

    ## Event mutations

    createEvent(event: EventInput!): Event!
    editEvent(id: ID!, event: EventInput!): Event!
    deleteEvent(id: ID!): ResultOutput
  }

  ######## End of Queries and Mutations
`;

export default typeDefs;
