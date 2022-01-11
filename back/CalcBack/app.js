const cors = require('cors')

console.log("Running");
const express = require('express');
// const mongoose = require('mongoose')

const app = express();
app.use(cors())
app.options('Access-Control-Allow-*', cors());
const bodyparser = require('body-parser')


require('dotenv/config')


// app.get('/', (req, res) => {

//     res.send('We are on home');

// })

app.get('/sum', (req, res) => {

    res.send('We are on sum');

})

app.get('/sum/:num1/:num2/',
    (req, res) => {

        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);

        let data = num1 + num2;

        res.send(data.toString());

    })

app.get('/sub/:num1/:num2/',
    (req, res) => {

        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);

        let data = num1 - num2;

        res.send(data.toString());

    })

app.get('/div/:num1/:num2/',
    (req, res) => {

        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);

        let data = num1 / num2;

        res.send(data.toString());

    })


app.get('/mul/:num1/:num2/',
    (req, res) => {

        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);

        let data = num1 * num2;

        res.send(data.toString());

    })



app.listen(3000);