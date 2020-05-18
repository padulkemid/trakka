import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: [6, 'too few charachters'],
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  } else {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  }
});

const User = mongoose.model('User', userSchema);

export default User;
