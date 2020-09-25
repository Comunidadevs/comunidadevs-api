import express from 'express';

const organizersRouter = express.Router();

organizersRouter.get('/', (_req, res) => {
  return res.json('organizers tests');
});

export default organizersRouter;
