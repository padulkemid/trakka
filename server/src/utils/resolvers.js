import {
  getEvents,
  getEventsById,
  createEvent,
  editEvent,
  deleteEvent,
} from '../entities/eventResolver';

import { register, login } from '../entities/userResolver';

const resolvers = {
  Query: {
    getEvents,
    getEventsById,
  },

  Mutation: {
    // Event

    createEvent,
    editEvent,
    deleteEvent,
    // User

    register,
    login,
  },
};

export default resolvers;
