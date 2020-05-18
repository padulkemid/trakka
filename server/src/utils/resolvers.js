import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Event, User } from '../models';

const resolvers = {
  Query: {
    getEvents: () => Event.find(),
    getEventsById: (_, { id }) => Event.findById(id),
  },

  Mutation: {
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
    createEvent: async (_, { event }) => {
      const newEvent = new Event(event);
      await newEvent.save();

      return newEvent;
    },
    deleteEvent: async (_, { id }) => {
      await Event.deleteOne({ _id: id });

      return {
        result: `Event within the id of : ${id}, is now deleted!`,
      };
    },
  },
};

export default resolvers;
