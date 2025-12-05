const express = require('express')
const path = require('path')

const app = express()

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')))

// Route للصفحة الرئيسية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

// API endpoint example
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from API', timestamp: new Date() })
})

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found')
})

// For Vercel serverless functions
module.exports = app

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}
