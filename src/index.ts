import { HTTPServer } from './servers/http';
import config from './config';
import databases from './databases';

const { env } = config;
const http = new HTTPServer(env.PORT);
const mongodb = new databases.MongoDatabase();

mongodb.connect();
http.initServer();
