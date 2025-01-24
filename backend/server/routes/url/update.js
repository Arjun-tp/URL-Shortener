import { getUrlsCollection } from '../../config/db.js'

export async function urlUpdate(request, res) {
  const { body } = request
  const { short_url: shortUrl, primary_url: primaryUrl } = body

  try {
    const urlEntry = await getUrlsCollection().updateOne(
      { short_url: shortUrl },
      { $set: { primary_url: primaryUrl } }
    )

    if (urlEntry.matchedCount === 0) {
      return res.status(404).json({ error: 'Short URL not found' })
    }

    res.status(200).json({ message: 'Short URL updated successfully', updated: urlEntry })
  } catch (error) {
    console.error('Error updating short URL:', error)
    res.status(500).json({ error: 'Failed to update short URL' })
  }
}
