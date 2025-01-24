import { getDatabase } from '../../config/db.js'

export async function urlGet(req, res) {
  const { shorten_id: shortenId } = req.params

  const db = getDatabase()
  const collection = db.collection('urls')

  try {
    const urlEntry = await collection.findOne({ short_url: `https://shorten.ly/${shortenId}` })

    if (!urlEntry) {
      return res.status(404).json({ error: 'Short URL not found' })
    }

    console.log(`[${shortenId}] Retrieved URL: ${urlEntry.originalUrl}`)
    res.status(200).json(urlEntry)
  } catch (error) {
    console.error('Error retrieving short URL:', error)
    res.status(500).json({ error: 'Failed to retrieve short URL' })
  }
}
