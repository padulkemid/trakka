
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_EVENT, GET_ALL_EVENTS, GET_EVENT, EDIT_EVENT, DELETE_EVENT } from "../schema";



export const GetAllEvents = () => {
  return useQuery(GET_ALL_EVENTS);
}

export const GetEventById = (id) => {
  return useQuery(GET_EVENT, {
    variables: { id }
  });
}

const [createEvent] = useMutation(CREATE_EVENT, { refetchQueries: [{ query: GET_ALL_EVENTS }] });
export const CreateEvent = async (event) => {
  try {
    const result = await createEvent({
      variables: {
        event
      }
    });
  } catch (error) {
    console.log(error);
  }
}

const [editEvent] = useMutation(EDIT_EVENT, { refetchQueries: [{ query: GET_ALL_EVENTS }] });
export const EditEventById = async (id, event) => {
  try {
    const result = await editEvent({
      variables: {
        id,
        event
      }
    });
  } catch (error) {
    console.log(error);
  }
}

const [deleteEvent] = useMutation(DELETE_EVENT, { refetchQueries: [{ query: GET_ALL_EVENTS }] });
export const DeleteEventById = async (id) => {
  try {
    const result = await deleteEvent({
      variables: {
        id
      }
    });
  } catch (error) {
    console.log(error);
  }
}