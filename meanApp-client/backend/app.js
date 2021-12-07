const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
})

app.post('/api/records', (req, res, next) => {
    const record = req.body;
    console.log(record);
    res.status(201).json({
        message: 'Record added successfully'
    });
});

//GET RECORDS
app.use('/api/records', (req, res, next) => {
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