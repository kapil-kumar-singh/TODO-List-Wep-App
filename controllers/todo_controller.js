const TodoSchema = require("../models/todoSchema");

module.exports.home = function(req, res){
    return res.render('home', {
        title : "TODO App"
    });
}

module.exports.addTask = function(req, res){
    console.log(req.body)
    TodoSchema.create(req.body, function(err, newFlied){
        if(err){
            console.log("error in creating a new schema", err);
            return;
        }
        console.log(newFlied);
        return res.redirect('back');
    })
}