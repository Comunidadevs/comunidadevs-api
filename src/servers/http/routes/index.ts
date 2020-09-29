import MongoDatabase from '../../../databases/mongo';
import organizers from './organizers';
import RouterModuleInterface from './router-module.interface';
import technolgies from './technolgies';

export default (database?: MongoDatabase): RouterModuleInterface[] => {
  return [organizers(database)];
};
