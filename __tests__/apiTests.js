const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/users', () => {
    describe('POST', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .post('/users')
          .expect('Content-Type', /text\/html/)
          .expect(200)
      })
    })
    // when proper signup request is submitted, data.length + 1
    describe('POST', () => {
      it('responds with ')
    })
  })

  // test for a return value from the database with an id that is sent from the frontend as a post request
  // this is testing addNewUser and getUserId

// test auth that password from a specific data row in the database...
// ...will return the same password as the same password passed into encryption
  // test encryption and password setting
})
