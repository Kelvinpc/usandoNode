const conexion = require('../database/db');

exports.save= (req,res)=> {
  const nombre = req.body.nombre;
  const apellido_PAT = req.body.apellido_PAT;
  const apellido_MAT = req.body.apellido_MAT;
  const edad = req.body.edad;
  const dni = req.body.dni;
  const telefono = req.body.telefono;


  console.log(nombre, apellido_PAT, apellido_MAT, edad, dni, telefono);

  conexion.query(`INSERT INTO persona SET ?`,
    {nombre: nombre, apellido_PAT: apellido_PAT, apellido_MAT: apellido_MAT, edad: edad, dni: dni, telefono: telefono}, (error ,results) =>{
      if (error) {
        console.log(error)
      }else{
        res.redirect('/');
      }
    });

}

exports.update= (req,res)=> {
  const id = req.body.id;

  const nombre = req.body.nombre;
  const apellido_PAT = req.body.apellido_PAT;
  const apellido_MAT = req.body.apellido_MAT;
  const edad = req.body.edad;
  const dni = req.body.dni;
  const telefono = req.body.telefono;

  console.log(nombre, apellido_PAT, apellido_MAT, edad, dni, telefono);

  conexion.query(`UPDATE persona SET ? WHERE id = ?`,
    [{nombre: nombre, apellido_PAT: apellido_PAT, apellido_MAT: apellido_MAT, edad: edad, dni: dni, telefono: telefono}, id], (error ,results) =>{
      if (error) {
        console.log(error)
      }else{
        res.redirect('/');
      }
    });

}