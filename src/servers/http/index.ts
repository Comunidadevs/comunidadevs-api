import express from 'express';
import routes from './routes';

export class HTTPServer {
  private app: express.Application;

  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  public initServer(): void {
    this.app.use('/organizers', routes.organizers);
    this.app.use('/technologies', routes.technolgies);
    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${this.port}`);
    });
  }
}

export default HTTPServer;
