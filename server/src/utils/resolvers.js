import { Event } from '../models';

const resolvers = {
  Query: {
    getEvents: () => Event.find(),
  },

  Mutation: {
    createEvent: async (_, { event }) => {
      const newEvent = new Event(event);
      await newEvent.save();

      return newEvent;
    },
  },
};

export default resolvers;
