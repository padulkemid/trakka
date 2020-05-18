import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: [6, 'too few charachters'],
  },
});

userSchema.pre('save', (next) => {
  if (!this.isModified('password')) {
    next();
  } else {
    bcrypt
      .genSalt(5)
      .then((salt) => bcrypt.hash(this.password, salt))
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch(next);
  }
});

userSchema.method = {
  comparePassword: (candidatePassword) => {
    const compared = bcrypt.compare(candidatePassword, this.password);
    return compared;
  },
};

const User = mongoose.model('User', userSchema);

export default User;
