const express = require('express');
const router = express.Router();
const conexion = require('./database/db');


router.get('/', (req, res) => {
  // retornamos una coleccion de datos. consulta exitosa "results", falló "error"
  conexion.query("SELECT * FROM persona", (error,results) =>{
    if(error){
      throw error;
    }else{
      // res.send(results);
      res.render('index',{registros : results });
      res.render('edit',{registros : results });

      // res.render('edit',{dev : 'Kelvin pipa castilla', skill: 'javaScrip', friend :['a','b','c']});
    }
  });
});

router.get('/create', (req, res)=>{
  res.render('create');
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);


module.exports = router;