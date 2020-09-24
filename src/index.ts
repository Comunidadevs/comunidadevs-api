import { HTTPServer } from './servers/http';
import config from './config';

const { env } = config;
const http = new HTTPServer(env.PORT);
http.initServer();
