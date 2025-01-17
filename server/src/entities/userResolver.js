import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import redis from '../utils/redis';
import { User } from '../models';

const register = async (_, { input }) => {
  const newUser = new User(input);
  await newUser.save();

  return {
    result: 'Successfully created new user!',
  };
};

const login = async (_, { input }) => {
  await redis.flushall();
  const { email, password } = input;
  const getUser = await User.findOne({ email });
  const compare = await bcrypt.compare(password, getUser.password);

  let result = null;

  if (!compare) {
    result = 'Wrong password!';
  } else {
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    await redis.set('token', token);
    result = `Successfully logged in with email: ${email}`;
  }

  return { result };
};

const logout = async () => {
  await redis.flushall();

  return {
    result: 'Successfully logged out!',
  };
};

export { register, login, logout };
