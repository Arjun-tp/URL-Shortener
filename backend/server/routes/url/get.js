import { getUrlsCollection } from '../../config/db.js'

/**
 * Get the URL entry by short URL or primary URL
 * if short url is provided, the key is short_url and value should be short code
 * if primary url is provided, the key is primary_url and value should be full url
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function urlGet(req, res) {
  const { url } = req.params

  let key = url.includes('www.') ? 'primary_url' : 'short_url'

  try {
    const query = key === 'short_url' ? { [key]: `shorten.ly/${url}` } : { [key]: url }
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
