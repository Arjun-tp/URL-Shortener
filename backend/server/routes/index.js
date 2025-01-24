import { Router } from 'express';
import healthRoutes from './health.js';
import { urlGet } from './url/get.js';
import { urlUpdate } from './url/update.js';
import { urlDelete } from './url/delete.js';
import { urlCreate } from './url/create.js';


const router = Router();

router.use('/health', healthRoutes);

// URL routes
router.get('/urls/:invite_id', urlGet);     // GET for retrieving a specific invite
router.put('/urls/:invite_id', urlUpdate);  // PUT for updating an invite
router.delete('/urls/:invite_id', urlDelete); // DELETE for deleting an invite
router.post('/urls', urlCreate);

export default router;
