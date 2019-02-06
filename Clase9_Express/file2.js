const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const Alumnos = [
    {name:"a", last_name:"aa", age:"22"}
];

app.get('/',(req, res)=>{
    res.json({"mensaje": "hola"});
})

app.get('/alumnos',(req,res) =>{
    res.send("<form action=add-alumno method=POST><input type=text name=nombre></input><button type=submit>submit</button></form>");
})

app.post('/add-alumno',(req,res)=>{
    const alumno = {name,last_name,age} = req.query;
    Alumnos.push(alumno)
    res.status(201).send({
        name,
        last_name,
        age
    })
    console.log(Alumnos); 
})


app.patch('/updatedata',(req,res)=>{
    const alumno = {name,last_name,age} = req.query;
    Alumnos[1] = alumno
    res.status(202).send({
        name,
        last_name,
        age
    })
    console.log(Alumnos);
})


app.listen(3000);