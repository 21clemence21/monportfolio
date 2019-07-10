const express = require('express')
var router = express.Router(); //on va definir les routes de l'app ici 
var Project = require('../src/models/project')
var project = require('../src/models/project');
//MES ROUTES GET

router.get('/', function(req, res) {
    res.render('admin'); 
});


router.get('/admin-post', function(req, res) {
    res.render('admin-post'); 
});

router.get('/post-projects', function(req, res) {

    res.render('post-projects'); 
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
router.post('/admin-post', (req, res) => { //// <form method = "POST" action="/admin/admin-post"></form>
    var userName = req.body.username;
    var userPassword = req.body.password;
    res.send("Bonjour " + userName + " " + "Ton mot de passe est " + userPassword);
    //res.redirect('/admin-post');
//executé lorsqu'est appelé admin-post.html
})

router.post('/post-projects', (req, res) => { ////// <form method = "POST" action="/admin/post-project"></form>

   var project = new Project(req.body);

     project.save(function(err,Project){
       if(err){
         res.send(err);
       }
       res.status(201).json(Project);
     })
    //res.redirect('/admin-post');
//executé lorsqu'est appelé post-project.html
})

module.exports = router;