require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const { authenticate } = require('./middleware')
const { getAnswers, postForm} = require('./src/services/queries')


const app = express();

app.use(helmet());

app.use(express.static('build'));

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//log requests to console
app.use((req, res, next) => {
    const { method, path } = req;
    console.log(`New request of type ${method} to endpoint '${path}'`);
    next();
});

app.get("/home", async (req, res) => {
    const answers = await getAnswers();
    console.log(answers)
    res.send(answers)
})

app.post("/form", async (req, res) => {
    const { health, job, love, self, user }  = req.body;
    //remember to add user_id later!
    await postForm(health, job, love, self, user);
    res.send();
})

//listening to port 
let port = process.env.PORT || 9000;

app.listen(port)
console.log(`Running on port ${port}`);