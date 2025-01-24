import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

export default router;
