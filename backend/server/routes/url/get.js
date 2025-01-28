import { getUrlsCollection } from '../../config/db.js'

export async function urlGet(req, res) {
  const { url } = req.params

  let key = url.includes('shorten.ly') ? 'short_url' : 'primary_url'

  try {
    const query = {[key]: JSON.stringify(url)}
    console.log('query:', query)
    const urlEntry = await getUrlsCollection().findOne(query)

    if (!urlEntry) {
      return res.status(404).json({ error: 'Short URL not found' })
    }

    res.status(200).json(urlEntry)
  } catch (error) {
    console.error('Error retrieving short URL:', error)
    res.status(500).json({ error: 'Failed to retrieve short URL' })
  }
}
