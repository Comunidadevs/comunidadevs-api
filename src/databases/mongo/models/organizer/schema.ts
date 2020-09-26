import { Schema } from 'mongoose';
import Organizer from './organizer';

const schema = new Schema();
schema.loadClass(Organizer);

export default schema;
