import * as express from 'express';
import {ContactRepository} from '../repository/contact.repository';

const contactRepository = new ContactRepository();
const router = express.Router();

router.get('/', async (req, res) => {
    const result = await contactRepository.findAll();
    res.json(result);
});


router.get('/:id', async (req, res) => {
    const result = await contactRepository.findOne(req.params.id);
    res.json(result);
});

router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const result = await contactRepository.add(req.body);
        res.redirect(303, `/contact/${result}`)
    } catch (e) {
        console.error(e.message);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    const result = await contactRepository.remove(req.params.id);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const result = await contactRepository.update(req.params.id, req.body);
    res.redirect(303, `/contact/${req.params.id}`)
});

export default router;
