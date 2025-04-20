const express=require('express');
const app=express();

//motod de plantillas
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));
//enrutador
app.use('/',require('./router'))
app.listen(5000, ()=>{
  console.log("servidor ejecutandosen en http://localhost:5000")
});