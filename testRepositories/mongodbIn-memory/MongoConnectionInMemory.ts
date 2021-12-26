import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;

const connect = async () => {
  await mongoose.disconnect();

  mongoServer = await MongoMemoryServer.create();

  const mongoUri = mongoServer.getUri();

  mongoose.connect(mongoUri, (err) => {
    if (err) throw err;
  });
};

const close = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

export default { connect, close };
