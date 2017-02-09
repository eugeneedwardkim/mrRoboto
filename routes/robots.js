var express = require('express');
var router = express.Router();
var Robot = require('../models/robot');

router.get('/', function(req, res){
    Robot.find( function(err, robots){
        res.render('robots', {robots: robots} );
    });
});

router.post('/', function(req, res){
    new Robot({
        type: req.body.type,
        description: req.body.description,
        special: req.body.special,
        madeOn: Date.now()
    }).save( function(err, song){
        res.redirect('/robots');
    })
});

router.get('/:id', function(req, res){
    Robot.findById(req.params.id, function(err, robot){
        res.render('robot', {robot: robot});
    });
});

module.exports = router;