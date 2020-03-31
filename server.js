const express = require('express');
const app = express();

const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 3000;

// es un instrucion o un callbax y si ejecuta siempre no importa que url es la persona que pida
app.use(express.static(__dirname + '/public'));

// Engine Handlebars
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: ' chA rlis',
        anio: new Date().getFullYear()
    });


});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: ' Charlis'
            // anio: new Date().getFullYear()
    });


});

app.listen(port, () => {
    console.log(`escuchando el puerto ${port}`);
});