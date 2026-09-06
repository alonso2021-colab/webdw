// Paso 1. 
require('dotenv').config();
const express = require('express')

const path = require('path');
// paso 2.
const app = express();

// paso 3.
const port = process.env.port;



// paso 4. 
app.set('view engine', 'ejs')

// paso 5. archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas 
// Llama al index
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/servicios',(req, res) => {
  res.render('servicio' )
})

app.get('/nosotros',(req, res) => {
  res.render('nosotros' )
})

app.get('/contacto',(req, res) => {
  res.render('contacto' )
})


// levantar servidor 
app.listen(port, () => {
  console.log("servidor arriba")
})
