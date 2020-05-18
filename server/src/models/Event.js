import mongoose from 'mongoose';

const { Schema } = mongoose;
const eventSchema = new Schema({
  title: String,
  description: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
