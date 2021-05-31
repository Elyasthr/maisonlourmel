//HTTP
//Serveur Express pour la partie http (sert juste a servir les pages du site)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

//middleware
app.use(express.static('public'));

//routes
app.get("/",(req,res)=>{
    res.render('index.html');
});

//Ecoute du port
app.listen(PORT,()=>{
     console.log('le server est lancé');
 });