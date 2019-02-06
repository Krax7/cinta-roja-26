const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/',(req, res)=>{
    res.json({"mensaje": "hola"});
})

app.get('/alumnos',(req,res) =>{
    res.send("<form action=add-alumno method=POST><input type=text name=nombre></input><button type=submit>submit</button></form>");
})

app.post('/add-alumno',(req,res)=>{
    console.log(req.body , req.query)
})

app.listen(3000);