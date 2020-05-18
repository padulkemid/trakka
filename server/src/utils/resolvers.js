import {
  getEvents,
  getEventsById,
  createEvent,
  editEvent,
  deleteEvent,
} from '../entities/eventResolver';

import { register, login, logout } from '../entities/userResolver';

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
    logout,
  },
};

export default resolvers;
