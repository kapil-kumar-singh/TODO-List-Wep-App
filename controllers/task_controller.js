const TaskSchema = require("../models/taskSchema");

module.exports.home = function(req, res){
    
    TaskSchema.find({}, function(err, taskSchema){
        if(err){
            console.log('error in find the schema', err);
            return;
        }
        return res.render('home', {
            title: "TODO APP",
            Taskschema: taskSchema
        })
    })

}


module.exports.addTask = function(req, res){
    // console.log(req.body)
    TaskSchema.create(req.body, function(err, newFlied){
        if(err){
            console.log("error in creating a new schema", err);
            return;
        }
        return res.redirect('back');
    })
}

module.exports.deleteTask = function(req, res){
    let id = req.body.id;
    TaskSchema.findByIdAndDelete(id, function(err){
        if(err){
            console.log("error in deleting the task", err);
            return;
        }
        return res.redirect('back')
    })
}