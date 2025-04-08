import { Router } from 'express';
import controllers from '../controllers/controllers';

const router = Router();

router.get("/", controllers.getHome);

export default router;

