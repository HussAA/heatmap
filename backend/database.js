const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "0071",
    host: "localhost",
    port: 54320,
    database: "heatmap"
})

module.exports = pool;