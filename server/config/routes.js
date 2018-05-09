const names = require('../controllers/apis.js');

module.exports = function(app){
    
    app.get('/',function(req,res){
        names.index(req,res);
    })
    
    app.get('/new/:name/',function(req,res){
        names.addName(req,res);
    })
    
    
    app.get('/remove/:name/',function(req,res){
        names.removeName(req,res);
    })

    app.get('/:name', function(req,res){
        names.name(req,res);
    })
}