import * as express from 'express';
import { UserRepository } from '../repository/user.repository';

const userRepository = new UserRepository();
const router = express.Router();

router.get('/', async (req, res) => {
    const result = await userRepository.findAll();
    res.json(result);
});

router.post('/', async (req, res) => {
    const result = await userRepository.add(req.body);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const result = await userRepository.findOne(req.params.id);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const result = await userRepository.update(req.params.id, req.body);
    res.json(result);
});

export default router;
