var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');


//La función que nos permite generar aleatoriamente datos mediante el módulo fake
//Se añadio los atributos :zipcode e ip

var generarUsuario = function()


{
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomZipCode = faker.address.zipCode();
  var randomImage= faker.image.avatar();
  var randomIP=faker.internet.ip();

  return {
    nombre: randomName,
    email: randomEmail,
    zipCode: randomZipCode,
    imagen: randomImage,
    IP : randomIP
  
  }

}

//Entrada principal
app.get('/', function (req, res) {
  res.send('Backend Reto I!');
})


//Endpoint 1
app.get('/friends', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})


//Endpoint 2
//El código es el mismos que en el apartado /friends,pero como los datos son aleatorios
//se genera un nuevo grupo de datos que los datos son diferentes,ergo,otros requerimientos

app.get('/amigos', function (req, res) {
 
   var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})


app.listen(3000);
                 
