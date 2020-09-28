import { Router } from 'express';

export default interface RouterModuleInterface {
  path: string;
  router: Router;
}
