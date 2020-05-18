import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './utils';

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await mongoose.connect('mongodb://localhost:27017/trakka', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  server.listen().then(({ url }) => {
    console.log(`🌠 woy kesini ${url}`);
  });
};

startServer();
