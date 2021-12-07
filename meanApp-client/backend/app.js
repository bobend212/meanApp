const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Record = require('./models/record');

const app = express();
// SBKj7CsrjnZuWdiq
mongoose.connect('mongodb+srv://matkon:SBKj7CsrjnZuWdiq@cluster0.luhwv.mongodb.net/DiaBeatDB?retryWrites=true&w=majority')
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
    record.save().then(createdRecord => {
        res.status(201).json({
            message: 'Record added successfully',
            recordId: createdRecord._id
        });
    });
});

//GET RECORDS
app.get('/api/records', (req, res, next) => {
    Record.find().then(documents => {
        res.status(200).json({
            message: 'Records fetched!',
            records: documents
        });
    });
});

//DELETE
app.delete('/api/records/:id', (req, res, next) => {
    Record.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: 'Record deleted!'})
    });
});

module.exports = app;