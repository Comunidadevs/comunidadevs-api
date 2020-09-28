import express from 'express';
import MongoDatabase from '../../databases/mongo';
import routes from './routes';

export class HTTPServer {
  private app: express.Application;

  private port: number;

  private routes: any;

  private mongoDatabase?: MongoDatabase;

  constructor(port: number, mongoDatabase?: MongoDatabase) {
    this.app = express();
    this.port = port;
    this.mongoDatabase = mongoDatabase;
  }

  public initServer(): void {
    /* this.app.use('/organizers', routes.organizers);
    this.app.use('/technologies', routes.technolgies); */
    this.routes = routes(this.mongoDatabase);
    console.log(this.routes);
    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${this.port}`);
    });
  }
}

export default HTTPServer;
