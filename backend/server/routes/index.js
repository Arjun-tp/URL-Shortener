import { Router } from 'express'
import healthRoutes from './health.js'
import { urlGet } from './url/get.js'
import { urlUpdate } from './url/update.js'
import { urlDelete } from './url/delete.js'
import { urlCreate } from './url/create.js'
import { urlRedirect } from './url/redirect.js'

const router = Router()

router.use('/health', healthRoutes)

// URL routes
router.get('/urls/:url', urlGet)
router.put('/urls', urlUpdate)
router.delete('/urls/:_id', urlDelete)
router.post('/urls', urlCreate)
router.get('/:shortUrl', urlRedirect)

export default router
