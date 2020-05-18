import { Event } from '../models';

const resolvers = {
  Query: {
    getEvents: () => Event.find(),
    getEventsById: (_, { id }) => Event.findById(id),
  },

  Mutation: {
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
