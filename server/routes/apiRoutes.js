const express = require('express')

const apiController = require('../controllers/apiController.js')

const router = express.Router()

// router.get('/', apiController.testController, (req, res) => {
//   res.send('no bugs')
// })

// get user id route handler
// router.get('/users/:id', apiController.getUserId, (req, res) => {
//   res.status(200).json(res.locals.rows)
// })

// get applications route handler
router.get('/users/applications/:id', apiController.getUsersApplications, (req, res) => {
  res.json(res.locals.applications)
})

// add application route handler
router.post('/applications', apiController.addApplication, (req, res) => {
  res.send('Post Successful!')
})

// get application id route handler
router.get('/applications/:id', apiController.getApplicationsId, (req, res) => {
  res.json(res.locals.applicationsId)
})

// ideally, change this to put instead of post
// add new user route handler
router.put('/users', apiController.addNewUser, (req, res) => {
  res.send('User created successfully!')
})

// update application route handler
router.put('/users/applications/:id', apiController.updateApplication, (req, res) => {
  res.send('Put Successful!')
})

// delete application route handler
router.delete('/applications/:id', apiController.deleteApplications, (req, res) => {
  res.send('Delete Successful!')
})

// post user password for comparison
router.post('/login', apiController.getUserInfo, apiController.loginCheck, (req, res) => {
  res.send(res.locals.loginResult)
})

module.exports = router
