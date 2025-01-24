import { MongoClient } from 'mongodb'
let client
let db
let urlsCollection

export async function connectToDatabase() {
  const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}?retryWrites=true&w=majority&appName=URL-Shortener`
  const dbName = 'urlShortener'

  try {
    client = new MongoClient(uri)
    await client.connect()
    db = client.db(dbName)
    urlsCollection = db.collection('urls')
    console.log(`Connected to MongoDB: ${dbName}`)
  } catch (error) {
    console.error('Failed to connect to MongoDB', error)
    process.exit(1)
  }
}

export function getDatabase() {
  if (!db) {
    throw new Error('Database not initialized. Call connectToDatabase first.')
  }
  return db
}

export function getUrlsCollection() {
  if (!urlsCollection) {
    throw new Error('Collection not initialized. Call connectToDatabase first.')
  }
  return urlsCollection
}