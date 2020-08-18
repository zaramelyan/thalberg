require('dotenv').config();

const express = require('express');
const bp = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { authenticate } = require('./middleware')
const { getAnswers, postForm} = require('./queries')


const app = express();

app.use(helmet());

app.use(express.static('build'));

//middleware
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


//log requests to console
app.use((req, res, next) => {
    const { method, path } = req;
    console.log(`New request of type ${method} to endpoint '${path}'`);
    next();
});

app.get("/api/home", async function (req, res) {
    const answers = await getAnswers();
    console.log(answers)
    res.send(answers)
})

app.post("/api/form", async (req, res) => {
    const { health, job, love, self, user }  = req.body;
    //remember to add user_id later!
    await postForm(health, job, love, self, user);
    res.send();
})


/*api.get('/session', authenticate, function (req, res) {
    res.send({ 
      message: 'You are authenticated'
    });
   });
*/

//listening to port 
let port = process.env.PORT || 8000;

app.listen(port)
console.log(`Running on port ${port}`);