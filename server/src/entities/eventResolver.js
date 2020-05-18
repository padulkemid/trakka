// import Redis from 'ioredis';
import { Event } from '../models';

// Invoke Redis and get Token
// const redis = new Redis();
// const token = async () => {
// const getToken = await redis.get('token');
// return getToken;
// };

// Queries

const getEvents = () => Event.find();
const getEventsById = (_, { id }) => Event.findById(id);

export { getEventsById, getEvents };

// Mutations

const createEvent = async (_, { event }) => {
  const newEvent = new Event(event);
  await newEvent.save();

  return newEvent;
};

const editEvent = async (_, { id, event }) => {
  const { title, description } = event;
  const newEvent = await Event.findById(id);

  // Edit title, and desc
  newEvent.title = title;
  newEvent.description = description;

  // save
  newEvent.save();

  return newEvent;
};

const deleteEvent = async (_, { id }) => {
  await Event.deleteOne({ _id: id });

  return {
    result: `Event within the id of : ${id}, is now deleted!`,
  };
};

export { createEvent, deleteEvent, editEvent };
