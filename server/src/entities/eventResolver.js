import jwt from 'jsonwebtoken';
import redis from '../utils/redis';
import { Event } from '../models';

// Verify token
let parentEmailCheck = null;
const verify = async () => {
  const token = await redis.get('token');
  if (!token) {
    parentEmailCheck = null;
    console.log('No token yet, result -> ', token);
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
      } else {
        parentEmailCheck = decoded.email;
      }
    });
  }
};

// Queries

const getEvents = async () => {
  verify();
  const getAllEvents = await Event.find({ email: parentEmailCheck });
  return getAllEvents;
};
const getEventsById = async (_, { id }) => {
  verify();
  const getEvent = await Event.findOne({ _id: id, email: parentEmailCheck });
  return getEvent;
};

export { getEventsById, getEvents };

// Mutations

const createEvent = async (_, { event }) => {
  verify();
  const { title, description } = event;
  let returnedEvent = null;
  if (!parentEmailCheck) {
    console.log('not logged in.');
  } else {
    const struct = {
      email: parentEmailCheck,
      title,
      description,
    };
    const newEvent = new Event(struct);
    await newEvent.save();
    returnedEvent = newEvent;
  }

  return returnedEvent;
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
  verify();
  let result = '';

  if (!parentEmailCheck) {
    result = 'Not logged in!';
  } else {
    await Event.deleteOne({ _id: id, email: parentEmailCheck });
    result = `Event within the id of : ${id}, is now deleted!`;
  }

  return {
    result,
  };
};

export { createEvent, deleteEvent, editEvent };
