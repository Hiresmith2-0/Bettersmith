const db = require('../models/models.js')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

module.exports = {
  // All general api controllers will go here
  // testController: async (req, res, next) => {
  //   try {
  //     console.log('test')
  //     const data = await db.query('SELECT * FROM users')
  //     console.log(data)
  //     next()
  //   } catch(err) {
  //     console.log(err)
  //     next(err)
  //   }
  // }

  // middleware for getting user id of logged in user
  getUserId: async (req, res, next) => {
    try {
      const { id } = req.params
      const text = 'SELECT * FROM users WHERE user_id = $1'
      const values = [id]
      const data = await db.query(text, values)
      res.locals.rows = data.rows[0]
      return next()
    } catch (err) {
      console.log(err)
      next(err)
    }
  },

  // middleware for getting existing applications that logged in user has posted
  getUsersApplications: async (req, res, next) => {
    const { id: userId } = req.params
    try {
      const data = await db.query('SELECT * FROM applications WHERE user_id = $1', [userId])
      res.locals.applications = data.rows
      next()
    } catch (err) {
      next(err)
    }
  },

  // TODO: create a variable that will automatically add a proper time instead of destructuring the createdate property on the req.body object
  // middleware for adding a new application
  addApplication: async (req, res, next) => {
    const {
      userId, companyname, status, priority, createddate,
      notes, posting
    } = req.body
    console.log(req.body)
    if (!userId || !companyname || !status || typeof priority !== 'string' || !createddate ||
      typeof notes !== 'string' || typeof posting !== 'string') next({ message: 'Invalid Body in addApplication' })
    try {
      await db.query(`
        INSERT INTO applications (user_id, companyname, status, priority, createddate, notes, posting)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        `, [userId, companyname, status, priority, createddate, notes, posting])
      next()
    } catch (err) {
      console.log(err)
      next(err)
    }
  },

  // middleware for getting application id for selected application
  getApplicationsId: async (req, res, next) => {
    const { id } = req.params
    try {
      const data = await db.query('SELECT * FROM applications WHERE application_id = $1', [id])
      res.locals.applicationsId = data.rows[0]
      next()
    } catch (err) {
      next(err)
    }
  },

  // middleware for adding a new user to the db through signup
  addNewUser: async (req, res, next) => {
    const { firstname, lastname, username, inputPassword } = req.body
    const user = await db.query('SELECT username FROM users WHERE username = $1', [username])
    console.log(user.rows)
    if (user.rows <= 0) {
      bcrypt.hash(inputPassword, salt, function (err, hash) {
        if (err) {
          console.log('whoops')
          return next(err)
        }
        db.query('INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)', [firstname, lastname, username, hash])
        return next()
      })
    } else {
      console.log('This username already exists')
      return next('error')
    }
    // await db.query('INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)', [firstname, lastname, username, ]) // 'CREATE USER WITH VALUES
  },

  // middleware for retrieving the user info based on the username
  getUserInfo: async (req, res, next) => {
    const { username } = req.body
    try {
      const data = await db.query('SELECT * FROM users WHERE username = $1', [username])
      res.locals.dataStore = data.rows[0]
<<<<<<< HEAD
=======
<<<<<<< HEAD
      console.log(res.locals.dataStore)
      return next();
=======
<<<<<<< HEAD
=======
      console.log(res.locals.dataStore)
>>>>>>> b5a413c49c2549093f025724a181ebdc232f4b0a
>>>>>>> dev
      return next()
>>>>>>> dev
    } catch (err) {
      console.log('Sorry, this username could not be found')
      return next(err)
    }
  },

<<<<<<< HEAD

 // if (err) {//   console.log('Was not able to compare password')//   return next(err)// }
//e.log(response)
  // if (response === true) {
  //res.locals.loginResult = 42
  // lse {
  //es.locals.loginResult = 24
  // }
  // console.log(res.locals.loginResult)
  // next()

=======
>>>>>>> dev
  // middleware for checking if the password of a given username matches the encrypted version of said password
  loginCheck: async (req, res, next) => {
    const { inputPassword } = req.body
    const { password } = res.locals.dataStore
<<<<<<< HEAD
    await bcrypt.compare(inputPassword, password)
      .then((response) => {
        res.locals.loginResult = response
        console.log('bcrypt response: ', res.locals.loginResult)
        return next()
      })
      .catch((err) => {
        return next(err)
      });
=======
    bcrypt.compare(inputPassword, password, function (err, response) {
      if (err) {
        console.log('Was not able to compare password')
        return next(err)
      }
      console.log(response)
      if (response === true) {
        res.locals.loginResult = 42
      } else {
        res.locals.loginResult = 24
      }
      console.log(res.locals.loginResult)
      return next()
    })
>>>>>>> dev
  },

  // TODO: add an update feature with a put request for the application
  // middleware for updating application information
  updateApplication: async (req, res, next) => {
    const { application_id, user_id, companyname, status, priority, createddate, notes, posting } = req.body
    console.log(req.body)
    if (!user_id || !companyname || !status || !priority || !createddate || typeof notes !== 'string' || typeof posting !== 'string') next({ message: 'Invalid Body in updateApplication' })
    try {
      await db.query(`UPDATE applications 
      SET user_id = $1, companyname = $2, status= $3, priority = $4, createddate = $5, notes = $6, posting = $7
      WHERE application_id = $8`, [user_id, companyname, status, priority, createddate, notes, posting, application_id])
      next()
    } catch (err) {
      console.log(err)
      next(err)
    }
  },

  // middleware for deleting an application
  deleteApplications: async (req, res, next) => {
    const { id } = req.params
    try {
      console.log(req.params)
      await db.query('DELETE FROM applications WHERE application_id = $1', [id])
      next()
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}
