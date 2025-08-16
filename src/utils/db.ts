import mongoose, { connect, ConnectionOptions } from "mongoose";

const { NEXT_MONGODB_URI } = process.env;

mongoose.set('strictQuery', true);

const options: ConnectionOptions = {
  useUnifiedTopology: true,
  autoIndex: true,
};

const connectToDatabase = (): Promise<typeof import("mongoose")> =>
  connect(NEXT_MONGODB_URI, options);

export default connectToDatabase;
