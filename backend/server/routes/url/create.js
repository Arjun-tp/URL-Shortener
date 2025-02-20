import { getUrlsCollection } from '../../config/db.js'
import { nanoid } from 'nanoid'

export async function urlCreate (request, res) {
  const { body } = request

  const { primary_url: primaryUrl } = body

  let shortUrl = `shorten.ly/${nanoid(10)}`
  try{
    const urlEntry = await getUrlsCollection().insertOne({ short_url: shortUrl, primary_url: primaryUrl })
    if (!urlEntry) {
      return res.status(404).json({ error: 'Short URL not found' })
    }
    res.status(200).json(urlEntry)

  } catch (error) {
    console.error('Error creating short URL:', error)
    res.status(500).json({ error: 'Failed to create short URL' })
  }

}
