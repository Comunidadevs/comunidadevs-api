import mongoose, { model, Mongoose } from 'mongoose';
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

  private models: any;

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
      mongoose
        .connect(this.uri, { useNewUrlParser: true })
        .then((connection) => {
          this.models = models(connection);
          console.log('a', this.models);
        })
        .catch((error) => {
          console.log('connect', error);
        });
      // this.models = models(this.connection);
      /*  this.connection.connection.on('error', () => {
        throw Error('error probando');
      });
      this.connection.connection.once('open', () => {
        console.log('connect');
      }); */
    } catch (error) {
      console.log('e', error);
    }
  }

  public getModels(): any | undefined {
    return this.models;
  }
}

export default MongoDatabase;
