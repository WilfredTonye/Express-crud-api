const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const User = require('./Models/Users-Model');
const Article = require('./Models/Article-Model');
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
//Gestion Utilisateurs
app.get('/api/users',(req,res)=> {
    User.findAll()
    .then(users => {
        const message ="Liste des utilisateur"
        res.json({message, data:users})
    })
})

app.get('/api/users/:id',(req,res)=> {
    User.findByPk(req.params.id)
    .then(user =>{
        const message ='un utilisateur a ete trouve'
        res.json({message, data:user})
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
        res.json({message,data:user.toJSON()})
    })
})

app.put('/api/users/:id',(req,res)=> {
    const id = req.params.id
    User.update(req.body,{
        where:{id:id}
    })
    .then(_ => {
        User.findByPk(id)
    .then(user =>{
        const message =`l'utilisateur ${id} a ete modifie`
        res.json({message, data:user})
    })
    })
})

app.delete('/api/users/:id',(req,res) => {
    const id = req.params.id
    User.destroy({
        where:{id:id}
    })
    .then(_=> {
        User.findByPk(id)
        .then(user => {
            const message =`l'utilisateur ${id} a ete supprime`
            res.json({message, data:user})
        })
    })
})

//Gestion des Articles

app.get('/api/articles',(req,res)=> {
    Article.findAll()
    .then(articles => {
        const message ="Liste des articles"
        res.json({message, data:articles})
    })
})

app.post('/api/articles', (req,res) => {
    let title = req.body.title
    let description = req.body.description
    const article = Article.create({
        title:title,
        description:description,
    })
    .then(articles => {
        const message ="Article cree"
        res.json({message,data:articles.toJSON()})
    })
})

app.listen(PORT, ()=> {
    console.log(`listening on port${PORT}.......`)
})