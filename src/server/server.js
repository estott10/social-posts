require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive'),
    controller = require('./controller');


const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.Database_URL)
    .then(db => {
        app.set('db', db);
        console.log('Database sucessfully connected')
        }
    ).catch(err => {
        console.log(`Database connection failed ${err.message}`)
    })

const port = process.env.PORT;

app.listen( port, () => {
    console.log(`Server listening on port ${port}`)
} );