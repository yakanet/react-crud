
import * as express from 'express';
import contact from './contact';
import todo from './todo';

const router = express.Router();

router.use('/contact', contact);
router.use('/todo', todo);

export default router;
