import app from './app.js'
import { connectToDatabase } from './config/db.js'

const PORT = process.env.PORT || 7004

const startServer = async (port = PORT) => {
  try {
    await connectToDatabase()

    const server = app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${port} is in use. Trying port ${port + 1}...`)
        startServer(port + 1)
      } else {
        console.error('Server error:', error)
        process.exit(1)
      }
    })
  } catch (error) {
    console.error('Failed to start the server:', error)
    process.exit(1)
  }
}

startServer()
