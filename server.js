const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

//Helpers
require('./hbs/helpers');

app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'Sergio Aparicio'
    });

});

app.get('/about', (req, res) => {

    res.render('about.hbs');

});

app.listen(port, () => {
    console.log("Escuchando en el puerto " + port);
});