const express = require('express')
var router = express.Router(); //on va definir les routes de l'app ici 
var Project = require('../src/models/project')
//MES ROUTES GET

router.get('/', function(req, res) {
    res.render('admin'); 
});

router.get('/admin-post', function(req, res) {
    res.render('admin-post'); 
});

router.get('/test', function(req, res) {
    res.render('test', {message: message}); 
});



router.get('/projets', function(req, res){
    Project.find(function(err, projets){
        console.log('es tu la');
        if (err) {
            req.render('pages/error404');
            console.log("les projets ne sont pas la")
        }

        res.render('projets', {projets: projets}); 

        //res.json(projets)
    })
})

//MES ROUTES POST
router.post('/admin-post', (req, res) => {
    var userName = req.body.username;
    var userPassword = req.body.password;
    console.log("Bonjour " + userName);
    res.send("Bonjour " + userName + " " + "Ton mot de passe est " + userPassword);
    res.redirect('/admin-post');
//executé lorsqu'est appelé admin-post.html
})


module.exports = router;
