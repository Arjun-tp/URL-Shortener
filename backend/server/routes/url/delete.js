import { getUrlsCollection } from '../../config/db.js'
import { ObjectId } from 'mongodb'
export async function urlDelete (request, reply) {
  const { _id: shortenUrlId } = request.params

  try {
    const urlEntry = await getUrlsCollection().deleteOne({ _id: new ObjectId(shortenUrlId) })

    if (!urlEntry) {
      return reply.status(404).json({ error: 'Short URL not found' })
    }

    reply.status(200).json(urlEntry)
  }catch (error) {
    console.error('Error deleting short URL:', error)
    reply.status(500).json({ error: 'Failed to delete short URL' })
  }
}
