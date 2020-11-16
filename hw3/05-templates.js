const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 5000;
const surl = 'https://restcountries.eu/rest/v2/all';

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Add your code below

app.get('/main', (req, res) => {
    request(surl, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        res.render('index', { title: 'Express', data: body });
    });
});

app.get('/populous', (req, res) => {
    request(surl, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        res.render('pop', { title: 'Express', data: body });
    });
});

app.get('/regions', (req, res) => {
    request(surl, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        res.render('reg', { title: 'Express', data: body });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});