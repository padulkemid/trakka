import bcrypt from 'bcrypt';
import { User } from '../models';

const register = async (_, { input }) => {
  const newUser = new User(input);
  await newUser.save();

  return {
    result: 'Successfully created new user!',
  };
};

const login = async (_, { input }) => {
  const { email, password } = input;
  const getUser = await User.findOne({ email });
  const compare = await bcrypt.compare(password, getUser.password);

  let result = null;

  if (!compare) {
    result = 'Wrong password!';
  } else {
    result = `Successfully logged in with email: ${email}`;
  }

  return { result };
};

export { register, login };
