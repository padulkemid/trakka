import mongoose from 'mongoose';

const { Schema } = mongoose;
const eventSchema = new Schema({
  email: String,
  title: String,
  description: String,
  timestamp: String,
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
