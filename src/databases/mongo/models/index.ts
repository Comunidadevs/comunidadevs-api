import { Mongoose } from 'mongoose';
import Organizer from './organizer';

export default (mongoose: Mongoose): any => {
  return {
    Organizer: Organizer(mongoose),
  };
};
