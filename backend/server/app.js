import express from 'express'
import routes from './routes/index.js'

const app = express()

// Middleware for JSON parsing
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // Allow all origins or specify a domain
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  next()
})

// Register all routes
app.use('/', routes)

export default app
