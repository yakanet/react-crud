import * as express from 'express';
import { ContactRepository } from '../repository/contact.repository';

const contactRepository = new ContactRepository();
const router = express.Router();

router.get('/', async (req, res) => {
    const result = await contactRepository.findAll();
    res.json(result);
});

router.post('/', async (req, res) => {
    const result = await contactRepository.add(req.body);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const result = await contactRepository.findOne(req.params.id);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const result = await contactRepository.update(req.params.id, req.body);
    res.json(result);
});

export default router;
