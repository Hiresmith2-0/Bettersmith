const { Pool } = require('pg')
require('dotenv').config()

const PG_URI = process.env.DB_URL

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
})

// Schema for the database can be found below:
// https://github.com/HireSmith/xxxxxx

/* Users DB Model:
  user_id SERIAL PRIMARY KEY
  firstname VARCHAR(50)
  lastname VARCHAR(50)
  username VARCHAR(50)
  password VARCHAR(50)
*/

/* Applications DB Model:
    application_id SERIAL PRIMARY KEY
    user_id INT
    companyname VARCHAR(50)
    status VARCHAR(50)
    priority VARCHAR(50)
    createddate TIMESTAMP
    notes VARCHAR(50)
    posting VARCHAR(50)
  */

// export an object containing query which will be the access point to the db
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', callback)
    return pool.query(text, params, callback)
  }
}
