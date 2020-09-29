import { HTTPServer } from './servers/http';
import config from './config';
import databases from './databases';

const { env } = config;
const mongodb = new databases.MongoDatabase(
  env.MONGO_HOST,
  env.MONGO_PORT,
  env.MONGO_USER,
  env.MONGO_PASSWORD,
  env.MONGO_DATABASE,
);
mongodb.initConnection();
const http = new HTTPServer(env.PORT);
http.initServer();
