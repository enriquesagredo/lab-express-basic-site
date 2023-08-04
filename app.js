const express = require('express');

const hbs = require('hbs');
const path = require('path');

const app = express();


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


const pageRouter = require('./config/routes.config');

app.use('/', pageRouter);

// usado por MVC

// app.get('/', (req, res) => {
//     res.send('Sitio web');
// })

// app.get('/about', (req, res) => {
//     res.send('Información sobre mí');
//   });

// app.get('/works', (req, res) => {
//     res.send('Mis trabajos');
//   });


app.listen(3000, () => console.log('🏃‍ on port 3000'));