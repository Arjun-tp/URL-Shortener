import { Router } from 'express'
import healthRoutes from './health.js'
import { urlGet } from './url/get.js'
import { urlUpdate } from './url/update.js'
import { urlDelete } from './url/delete.js'
import { urlCreate } from './url/create.js'

const router = Router()

router.use('/health', healthRoutes)

// URL routes
router.get('/urls/:shorten_code', urlGet)
router.put('/urls', urlUpdate)
router.delete('/urls/:_id', urlDelete)
router.post('/urls', urlCreate)

export default router
