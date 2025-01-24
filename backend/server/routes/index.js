import { Router } from 'express'
import healthRoutes from './health.js'
import { urlGet } from './url/get.js'
import { urlUpdate } from './url/update.js'
import { urlDelete } from './url/delete.js'
import { urlCreate } from './url/create.js'


const router = Router()

router.use('/health', healthRoutes)

// URL routes
router.get('/urls/:url_id', urlGet)
router.put('/urls', urlUpdate)
router.delete('/urls/:url_id', urlDelete)
router.post('/urls', urlCreate)

export default router
