import * as express from 'express';
import {TodoRepository} from '../repository/todo.repository';

const todoRepository = new TodoRepository();
const router = express.Router();

router.get('/', async (req, res) => {
    const result = await todoRepository.findAll();
    res.json(result);
});


router.get('/:id', async (req, res) => {
    const result = await todoRepository.findOne(Number(req.params.id));
    res.json(result);
});

router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const result = await todoRepository.add(req.body);
        res.redirect(303, `/todo/${result}`)
    } catch (e) {
        console.error(e.message);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    const result = await todoRepository.remove(Number(req.params.id));
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const result = await todoRepository.update(Number(req.params.id), req.body);
    res.redirect(303, `/todo/${req.params.id}`)
});

export default router;
