'use strict';

const express = require('express'); 
const router = express.Router(); 
const app = express(); 
const hbs = require('hbs');

app.set('view engine', 'hbs'); 
app.set('views', `${__dirname}/../views`); 
hbs.registerPartials(`${__dirname}/../views/partials`); 

app.use(express.static(`${__dirname}/../public`)); 
app.use((err, req, res, next) => {
    console.log(err);
    res.sendStatus(500); 
});

app.use(require('./routes')(router)); 

app.listen(5000, () => {
    console.log('Listening port 3000');
});
