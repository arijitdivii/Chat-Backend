import mongoose from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDatabase');

export const connect = () => {
  mongoose
    .connect(`${config.DATABASE_URL}`)
    .then(() => log.info('MongoDB connected successfully'))
    .catch((err) => log.error(err, 'MongoDB not connected'));
};

mongoose.connection.on('disconnected', connect);
