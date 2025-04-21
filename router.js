const express = require('express');
const router = express.Router();
const conexion = require('./database/db');


router.get('/', (req, res) => {
  conexion.query("SELECT * FROM persona", (error,results) =>{
    if(error){
      throw error;
    }else{
      res.render('index',{registros : results });
      res.render('edit',{registros : results });

    }
  });
});

router.get('/create', (req, res)=>{
  res.render('create');
})

router.get('/delete/:id',(req, res) =>{
  conexion.query("DELETE FROM persona WHERE id = ?", [req.params.id], (error, results) => {
    if(error){
      throw(error);
    }else{
      res.redirect('/');
    }
  });
});

router.get('/edit/:id', (req, res) => {
  conexion.query("SELECT * FROM persona WHERE id = ?", [req.params.id], (error, results) =>{
    if(error){
       throw(error);
    }else{
      res.render('edit', {persona: results [0]});
    }
  });
});


const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update',crud.update);



module.exports = router;