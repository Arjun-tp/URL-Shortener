import { getUrlsCollection } from '../../config/db.js'

export async function urlGet(req, res) {
  const { shorten_code: shortenCode } = req.params

  try {
    const urlEntry = await getUrlsCollection().findOne({ short_url: `shorten.ly/${shortenCode}` })

    if (!urlEntry) {
      return res.status(404).json({ error: 'Short URL not found' })
    }

    res.status(200).json(urlEntry)
  } catch (error) {
    console.error('Error retrieving short URL:', error)
    res.status(500).json({ error: 'Failed to retrieve short URL' })
  }
}
