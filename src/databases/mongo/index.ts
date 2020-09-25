import { MongoClient } from 'mongodb';

export class MongoDatabase {
  private host: string;

  private port: string;

  private database: string;

  private uri: string;

  constructor() {
    this.host = 'localhost';
    this.port = '27017';
    this.database = 'comunidadevs';
    this.uri = `mongodb://${this.host}:${this.port}`;
  }

  public connect(): void {
    MongoClient.connect(this.uri, (error, client) => {
      console.log('error->', error, 'client', client);
    });
  }
}

export default MongoDatabase;
