const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT ?? 8080;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "nst-food-menu@newtonschool.co"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "Passw0rd."
app.use(cors());
app.use(express.json());


app.get('/api/v1/health', (req, res)=>{
    res.status(200).send({
        message: "App is running smooth..."
    })
})
app.post('/api/v1/login', (req,res)=>{
    try{
        const {email, password} = req.body;
        if(email === ADMIN_EMAIL && password === ADMIN_PASSWORD){
            sessionStorage.setItem("AdminLogin", ADMIN_EMAIL);
            return res.status(200).send({
                message: "Login Successful"
            })
        }
        return res.status(401).send({
            message: "Login Failed"
        })
    }
    catch(error){
        res.status(500).send({
            message: "Server not responding"
        })
    }
})
app.get('/api/v1/menus', (req,res)=>{
    try{
        if(sessionStorage.getItem('AdminLogin') !== ADMIN_EMAIL) {
            return res.status(403).send({
                message: "Access Denied"
            })
        }
        return res.status(200).send({
            message: "Data to be added",
            data: []
        })
    }
    catch(error){
        res.status(500).send({
            message: "Server not responding"
        })
    }
})

app.post('/api/v1/menus', (req,res)=>{
    try{
    
    }
    catch(error){
        res.status(500).send({
            message: "Server not responding"
        })
    }
})
app.get('/api/v1/api/menus/:id', (req, res)=>{
    try{
    
    }
    catch(error){
        res.status(500).send({
            message: "Server not responding"
        })
    }
})
app.put('/api/v1/api/menus/:id', (req, res)=>{
    try{
    
    }
    catch(error){
        res.status(500).send({
            message: "Server not responding"
        })
    }
})


app.delete('/api/v1/api/menus/:id', (req, res)=>{
    try{
    
    }
    catch(error){
        res.status(500).send({
            message: "Server not responding"
        })
    }
})
app.post('/api/v1/api/menus/:id/publish', (req, res)=>{
    try{
    
    }
    catch(error){
        res.status(500).send({
            message: "Server not responding"
        })
    }
})

app.get('/api/v1/api/menus/current',(req,res) =>{
    try{
    
    }
    catch(error){
        res.status(500).send({
            message: "Server not responding"
        })
    }
})



app.listen(PORT, ()=>{
    console.log(`App is listening at Port: ${PORT}`)
})