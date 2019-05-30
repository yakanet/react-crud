import * as express from 'express';
import { TodoRepository } from '../repository/todo.repository';

const todoRepository = new TodoRepository();
const router = express.Router();

router.get('/', async (req, res) => {
    const result = await todoRepository.findAll();
    res.json(result);
});

router.post('/', async (req, res) => {
    const result = await todoRepository.add(req.body);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const result = await todoRepository.findOne(req.params.id);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const result = await todoRepository.update(req.params.id, req.body);
    res.json(result);
});

export default router;
