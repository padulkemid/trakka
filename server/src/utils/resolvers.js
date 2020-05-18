import bcrypt from 'bcrypt';
import { User } from '../models';
import {
  getEvents,
  getEventsById,
  createEvent,
  editEvent,
  deleteEvent,
} from '../entities/eventResolver';

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

    register: async (_, args) => {
      const { username, email, password } = args;
      const newUser = new User({ username, email, password });
      await newUser.save();

      return newUser;
    },
    login: async (_, args) => {
      const { email, password } = args;
      const getUser = await User.findOne({ email });

      const check = await bcrypt.compare(password, getUser.password);
      console.log(check);
    },
  },
};

export default resolvers;
