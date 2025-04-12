import { Router } from 'express';
import { getActores, createActor } from '../controllers/actorController.js';

const router = Router();

router.get('/', getActores);
router.post('/', createActor);

export default router;
