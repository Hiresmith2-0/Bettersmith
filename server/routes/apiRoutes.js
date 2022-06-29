const express = require('express')

const apiController = require('../controllers/apiController.js')

const router = express.Router()

// router.get('/', apiController.testController, (req, res) => {
//   res.send('no bugs')
// })

router.get('/users/:id', apiController.getUserId, (req, res) => {
  res.status(200).json(res.locals.rows)
})

router.get('/users/applications/:id', apiController.getUsersApplications, (req, res) => {
  res.json(res.locals.applications)
})

router.post('/applications', apiController.addApplication, (req, res) => {
  res.send('Post Successful!')
})

router.get('/applications/:id', apiController.getApplicationsId, (req, res) => {
  res.json(res.locals.applicationsId)
})
// ideally, change this to put instead of post
router.post('/users', apiController.addNewUser, (req, res) => {
  res.send('Post Successful!')
})

router.put('/users/applications/:id', apiController.updateApplication, (req, res) => {
  res.send('Put Successful!')
})

router.delete('/applications/:id', apiController.deleteApplications, (req, res) => {
  res.send('Delete Successful!')
})

module.exports = router
