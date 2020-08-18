const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DB,
    password: process.env.DBPASS,
    port: process.env.DBPORT,
  })

const getAnswers = () => {
  console.log("reached")
    pool.query('SELECT * FROM thalberganswers')
    .then(({rows}) => rows);
};

const postForm = (health, job, love, self, user) => {
    pool.query('INSERT INTO thalberganswers (health, job, love, self, user_id) VALUES ($1, $2, $3, $4, $5)', [health, job, love, self, user])
  };

  module.exports = {
      getAnswers,
      postForm
  }