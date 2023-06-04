const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const User = require('./Models/Users-Model');
const app = express();
const PORT = 4000

app.use(bodyParser.json())
   .use(morgan('dev'))

   const sequelize = new Sequelize('Express-api-rest', 'postgres', '123456789', {
    host: 'localhost',
    dialect:'postgres'
  });

   sequelize.authenticate()
   .then(_=> console.log('Connexion reussi!'))
   .catch(error => console.error(`Connexion impossible ${error}`))
//app route

//home route
app.get('/', (req,res) => {
    res.send("Hello Express")
})

app.get('/api/users',(req,res)=> {
    User.findAll()
    .then(users => {
        const message ="Liste des utilisateur"
        res.json({message, data:users})
    })
})

app.post('/api/users', (req,res) => {
    let username = req.body.username
    let email = req.body.email
    let gender = req.body.gender
    let phone = req.body.phone
    const user = User.create({
        username:username,
        email:email,
        gender:gender,
        phone:phone
    })
    .then(user => {
        const message ="Utilisateur cree"
        res.json({message,data:user})
    })
})

app.listen(PORT, ()=> {
    console.log(`listening on port${PORT}.......`)
})