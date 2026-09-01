// Paso 1. 
const express = require('express')
const path = require('path');
// paso 2.
const app = express();

// paso 3.
const port = 3000;

// paso 4. 
app.set('view engine', 'ejs')

// paso 5. archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas 
// Llama al index
app.get('/', (req, res) => {
  res.render('index');
})

// Llama al index 
app.get('/servicio', (req, res) => {
  res.render('servicio')
});


// levantar servidor 
app.listen(port, () => {
  console.log("servidor arriba")
})
