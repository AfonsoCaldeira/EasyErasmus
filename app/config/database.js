const pg = require('pg');

  const Pool = pg.Pool
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    replicationUser: process.env.DB_REPLICATION_USER,
    replicationPassword: process.env.DB_REPLICATION_PASSWORD,
    port: process.env.DB_PORT,
    max: 20});
  
module.exports = pool;