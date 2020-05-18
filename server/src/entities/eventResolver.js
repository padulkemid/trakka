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
  await verify();
  const getAllEvents = await Event.find({ email: parentEmailCheck });
  return getAllEvents;
};
const getEventsById = async (_, { id }) => {
  await verify();
  const getEvent = await Event.findOne({ _id: id, email: parentEmailCheck });
  return getEvent;
};

export { getEventsById, getEvents };

// Mutations

const createEvent = async (_, { event }) => {
  await verify();
  const { title, description, timestamp } = event;
  let returnedEvent = null;

  if (!parentEmailCheck) {
    console.log('not logged in.');
  } else {
    const struct = {
      email: parentEmailCheck,
      title,
      description,
      timestamp,
    };
    const newEvent = new Event(struct);
    await newEvent.save();
    returnedEvent = newEvent;
  }

  return returnedEvent;
};

const editEvent = async (_, { id, event }) => {
  await verify();
  const { title, description, timestamp } = event;
  let returnedEvent = null;

  if (!parentEmailCheck) {
    console.log('Not logged in!');
  } else {
    const newEvent = await Event.findOne({ _id: id, email: parentEmailCheck });

    // Edit title, and desc
    newEvent.title = title;
    newEvent.description = description;
    newEvent.timestamp = timestamp;

    // save
    await newEvent.save();
    returnedEvent = newEvent;
  }
  return returnedEvent;
};

const deleteEvent = async (_, { id }) => {
  await verify();
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
