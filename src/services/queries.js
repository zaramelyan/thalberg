const { Pool } = require('pg');

const pool = new Pool({
    // user: process.env.DBUSER,
    // host: process.env.DBHOST,
    // database: process.env.DB,
    // password: process.env.DBPASS,
    // port: process.env.DBPORT,
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })


  function getAnswers() {
    return pool.query(`
      SELECT
        answers.id,
        answers.created_at,
        answers.health,
        answers.job,
        answers.love,
        answers.self
      FROM
        answers
      ORDER BY answers.created_at DESC
    `)
    .then(({ rows }) => rows);
  }

const checkToday = () => {
  pool.query('SELECT created_at FROM answers ORDER BY created_at DESC LIMIT 1')
  .then((row) => row);
}

const postForm = (health, job, love, self, user) => {
    pool.query('INSERT INTO answers (health, job, love, self, user_id) VALUES ($1, $2, $3, $4, $5)', [health, job, love, self, user])
  };

  module.exports = {
      getAnswers,
      checkToday,
      postForm
  }