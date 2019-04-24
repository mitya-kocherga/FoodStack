const User = require("../models/User");

exports.all_users = function(req, res) {
    User.find({}, function (err, users) {
        res.json(users);
    })
};

exports.add_user = function(req, res) {
    console.log(req.body.userName)
    new User({ userName: req.body.userName, isAdmin: req.body.isAdmin }).save().then(r => {
        res.status(201).send({message:'Created'});
    })
        .catch(err => {
            return res.status(400).send({message: 'Data is empty', error: err});
        })
};

exports.delete_user = function(req, res) {
    User.findOneAndRemove({_id: req.body.id}, function (e, user) {
        if (e) return res.status(400).send({message: 'Object not found'});
        return res.status(200).send({message: 'Object successfully deleted'});
    })
};