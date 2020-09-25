import express from 'express';

const technologiesRouter = express.Router();

technologiesRouter.get('/', (_req, res) => {
  return res.json('technologies tests');
});

export default technologiesRouter;
