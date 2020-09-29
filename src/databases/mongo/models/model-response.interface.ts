import { Document } from 'mongoose';

export interface ModelResponseInterface {
  getAll(): Promise<unknown[]>;
  getById(): Promise<unknown>;
}

export default ModelResponseInterface;
