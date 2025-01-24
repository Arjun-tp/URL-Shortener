import express from 'express'
import routes from './routes/index.js'

const app = express()

// Middleware for JSON parsing
app.use(express.json())

// Register all routes
app.use('/', routes)

export default app
