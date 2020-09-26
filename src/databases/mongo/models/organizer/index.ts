import { Mongoose } from 'mongoose';
import ModelResponseInterface from '../model-response.interface';
import schema from './schema';

export default (mongoose: Mongoose): ModelResponseInterface => {
  const Organizer = mongoose.model('Organizer', schema);
  return {
    getAll: async (): Promise<unknown[]> => {
      const organizers = await Organizer.find({});
      return organizers;
    },
    getById: async (): Promise<unknown> => {
      return {};
    },
  };
};
