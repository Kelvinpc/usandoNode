const conexion = require('../database/db');

exports.save= (req,res)=> {
  //acceder a los datos enviados (vista)
  const nombre = req.body.nombre;
  const apellido_PAT = req.body.apellido_PAT;
  const apellido_MAT = req.body.apellido_MAT;
  const edad = req.body.edad;
  const dni = req.body.dni;
  const telefono = req.body.telefono;


  //NOTA: se debe especificar como capturar los datos de los <form></form> app.js
  //evidencia de captura de datos
  console.log(tipo, marca, color);

  conexion.query(`INSERT INTO persona SET ?`,
    {nombre: nombre, apellido_PAT: apellido_PAT, apellido_MAT: apellido_MAT, edad: edad, dni: dni, telefono: telefono}, (error ,results) =>{
      if (error) {
        console.log(error)
      }else{
        //redireccionar
        res.redirect('/');
      }
    });

}