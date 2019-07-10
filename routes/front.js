const express = require('express')
var router = express.Router(); //on va definir les routes de l'app ici 

//MES ROUTES GET
router.get('/', (req, res) => {
    res.render('home')
})

router.get('/contact', function(req, res) {
    res.render('pages/contact'); 
});

module.exports = router;