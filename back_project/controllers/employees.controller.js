const Employe = require("../models/empleados.model");

let response = {
    msg: "",
    succes: false
}

exports.create = function (req, res) {

    let employe = new Employe({
        name: req.body.name,
        lastName_p: req.body.lastName_p,
        lastName_m: req.body.lastName_m,
        phone: req.body.phone,
        email: req.body.email,
        addres: req.body.addres
    });

    employe.save(err => {
        if(err){
            console.log = err,
            response.succes = false,
            response.msg = "Error saving employe", 
            res.json(response)
            return;
        }
        response.succes = true,
        response.msg = "Save  succes", 
        res.json(response)
        return;
        
    });
    
}

exports.find = function(req, res){
    Employe.find((err, employe) =>{
        res.json(employe);
    })
}

exports.findOne = function(req, res){
    Employe.findOne({_id: req.params.id}, (err, employe) =>{

        res.json(employe);
    });
   
}