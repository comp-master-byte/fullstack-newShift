const Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    password: "karen123",
    host: "localhost",
    port: 5432,
    database: "newshift_test"
})

module.exports = pool