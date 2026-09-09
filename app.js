// Paso 1. 
require('dotenv').config();
const { name } = require('ejs');
const express = require('express')

const path = require('path');
// paso 2.
const app = express();

// paso 3.
const port = process.env.port;



// paso 4. 
app.set('view engine', 'ejs')

// MIDDLEWARES
// Permite leer info enviada desde el formulario HTML
app.use(express.urlencoded({extended: true}));

// paso 5. archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas 
// Llama al index
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/servicios',(req, res) => {
  res.render('servicios' )
})

app.get('/nosotros',(req, res) => {
  res.render('nosotros' )
})

app.get('/contacto',(req, res) => {
  res.render('contacto', {
    mensajeExito: null
  } )
})

app.post('/contacto', (req, res) => {
  const {
    nombre,
    correo,
    Asunto, 
    mensaje
  } = req.body

  console.log('-----------------')
  console.log('Nuevo mensaje')
  console.log('-----------------')
  console.log('nombre: ', nombre)
  console.log('correo: ', correo)
  console.log('asunto: ', Asunto)
  console.log('Mensaje: ', mensaje)

  res.render('contacto', {
    mensajeExito: 'Tu informacion se envio correctamente'
  })

})


// levantar servidor 
app.listen(port, () => {
  console.log("servidor arriba")
})
