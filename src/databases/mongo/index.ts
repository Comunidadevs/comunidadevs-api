import mongoose, { Mongoose } from 'mongoose';
import models from './models';

export class MongoDatabase {
  private host: string;

  private port: string;

  private database: string;

  private user: string;

  private password: string;

  private uri: string;

  private AUTHMECHANISM = 'DEFAULT';

  private connection!: Mongoose;

  constructor(host: string, port: string, user: string, password: string, database: string) {
    this.host = host;
    this.port = port;
    this.database = database;
    this.user = user;
    this.password = password;
    this.uri = `mongodb://${encodeURIComponent(this.user)}:${encodeURIComponent(this.password)}@${
      this.host
    }:${this.port}/${this.database}?authMechanism=${this.AUTHMECHANISM}`;
    console.log(
      'a',
      this.host,
      this.port,
      this.database,
      this.user,
      this.password,
      'uri',
      this.uri,
      models,
    );
  }

  public async initConnection(): Promise<void> {
    try {
      this.connection = await mongoose.connect(this.uri, { useNewUrlParser: true });
      this.connection.connection.on('error', () => {
        throw Error('error probando');
      });
    } catch (error) {
      console.log('e', error);
    }
  }

  public getModels(): any | undefined {
    console.log('con', this.connection);
    return models(this.connection);
  }
}

export default MongoDatabase;
