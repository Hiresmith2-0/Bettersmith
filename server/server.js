const path = require('path')
const express = require('express')

const app = express()
const PORT = 3000

// require routers
const apiRoutes = require('./routes/apiRoutes.js')

// handle parsing request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// handle requests for static files
app.use(express.static(path.join(__dirname, '../dist')))

// route handler to respond with main app
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'))
})
// route handler to respond with documents page
app.get('/documents', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'))
})

// define route handlers
app.use('/api', apiRoutes)

// catch-all route handler for any requests to unknown routes
app.use((req, res) => res.sendStatus(404))

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error handler caught middleware error',
    status: 500,
    message: { err: 'An error occured' }
  }
  const errorObj = Object.assign(defaultErr, err)
  return res.status((errorObj.status)).json(errorObj.message)
})
// if (process.env.NODE_ENV !== 'test') {
// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT} ...`)
// })
// }

module.exports = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
