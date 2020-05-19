import gql from "graphql-tag";

export const GET_ALL_EVENTS = gql`
query allEvents {
  getEvents {
    id
    email
    title
    description
    timestamp
  }
}`;

export const GET_EVENT = gql`
query eventById($id:ID!){
  getEventsById(id: $id){
    id
    title
    description
    timestamp
  }
}`;

export const EDIT_EVENT = gql`
mutation editEvent($id: ID!, $event: EventInput!){
  editEvent(id: $id, event: $event){
    id
    title
    description
    timestamp
  }
}`;

export const DELETE_EVENT = gql`
mutation deleteEvent($id: ID!){
  deleteEvent(id: $id){
    result
  }
}`;