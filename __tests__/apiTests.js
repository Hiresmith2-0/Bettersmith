import 'react'
const request = require('supertest')
const server = 'http://localhost:3000'
const db = require('../server/models/models.js')
// const bcrypt = require('bcryptjs')

describe('Route integration', () => {
  describe('/users', () => {
    describe('POST to signup page', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .post('/users')
          .expect('Content-Type', /text\/html/)
          .expect(200)
      })
      // when proper signup request is submitted, data.length + 1
      // it('responds with ', () => {
      //   return request(server)
      //   .post('/users')
      // }
    })
    // test for a return value from the database with an id that is sent from the frontend as a post request
    // this is testing addNewUser and getUserId
    it('returns added username from the database after being posted', async () => {
      const res = await request(server)
        .post('/users')
        .send({
          username: 'example1',
          password: 'password1'
        })
      expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('post')
      expect(res.body.username).toEqual(db.query('SELECT username FROM users WHERE username = "example1"'))
    })
    // test auth that password from a specific data row in the database...
    // ...will return the same password as the same password passed into encryption
    // test encryption and password setting
    // test userCheck middleware function's comparison with input password and hashed password
    it('returns added password from the database after being posted', async () => {
      const res = await request(server)
        .post('/users')
        .send({
          username: 'example2',
          password: 'password2'
        })
      expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('post')
      expect(res.body.password).not.toEqual(db.query('SELECT password FROM users WHERE username = "example2"'))
    })
  })
})
