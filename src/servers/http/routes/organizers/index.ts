import express from 'express';
import MongoDatabase from '../../../../databases/mongo';
import RouterModuleInterface from '../router-module.interface';

const path = '/organizers';
// const nameRouter = 'Organizers';
const organizersRouter = express.Router();

export default (_database?: MongoDatabase): RouterModuleInterface => {
  organizersRouter.get('/', (_req, res) => {
    return res.json('organizers tests');
  });
  return {
    path,
    router: organizersRouter,
  };
};
