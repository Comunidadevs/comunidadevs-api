import { HTTPServer } from './servers/http';
import config from './config';
import databases from './databases';

const { env } = config;
const http = new HTTPServer(env.PORT);
const mongodb = new databases.MongoDatabase(
  env.MONGO_HOST,
  env.MONGO_PORT,
  env.MONGO_USER,
  env.MONGO_PASSWORD,
  env.MONGO_DATABASE,
);
const connection = await mongodb.initConnection();

console.log('aaa', mongodb.getModels());
http.initServer();
