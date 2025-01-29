import { getUrlsCollection } from '../../config/db.js'

/**
 * Get the URL entry by short URL or primary URL
 * if short url is provided, the key is short_url and value should be short code
 * if primary url is provided, the key is primary_url and value should be full url
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function urlRedirect(req, res) {
  const { shortUrl } = req.params
  const query = { short_url: `shorten.ly/${shortUrl}` }
  console.log('query:', JSON.stringify(query))
  try {
    const urlEntry = await getUrlsCollection().findOne(query)
    console.log('urlEntry:', urlEntry)
    if (urlEntry) {
      return res.json({ primary_url: urlEntry.primary_url })
    } else {
      return res.status(404).json({ error: 'URL not found' })
    }
  } catch (error) {
    console.error('Error retrieving short URL:', error)
    res.status(500).json({ error: 'Failed to retrieve short URL' })
  }
}
