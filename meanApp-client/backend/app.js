const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Record = require('./models/record');

const app = express();
// SBKj7CsrjnZuWdiq
mongoose.connect('mongodb+srv://matkon:SBKj7CsrjnZuWdiq@cluster0.luhwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to DB!');
    })
    .catch(() => {
        console.log('Connection with DB FAILED');
    });

app.use(bodyParser.json());

//CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
})

// POST NEW RECORD
app.post('/api/records', (req, res, next) => {
    const record = new Record({
        title: req.body.title,
        measure: req.body.measure
    });
    console.log(record);
    res.status(201).json({
        message: 'Record added successfully'
    });
});

//GET RECORDS
app.get('/api/records', (req, res, next) => {
    const records = [
        { id: 'dagdf1232', title: 'TITLE1', measure: '200'},
        { id: 'fdfsd123', title: 'TITLE2', measure: '150'},
        { id: 'dhfg123123', title: 'TITLE3', measure: '95'},
        { id: 'jjhf234', title: 'TITLE4', measure: '111'},
        { id: 'djghjh34', title: 'TITLE5', measure: '234'},
    ];
    
    res.status(200).json({
        message: 'Records fetched!',
        records: records
    });
});

module.exports = app;