const Order = require("../models/Order");

exports.all_orders = function(req, res) {
    Order.find({}, function (err, orders) {
        res.json(orders);
    })
};

exports.post_order = function(req, res) {
    new Order({ userName: req.body.userName, choice: req.body.choice, userID: req.body.userID }).save().then(r => {
        res.status(201).send({message:'Created'});
    })
        .catch(err => {
            return res.status(400).send({auth: false, message: 'Data is empty'});
        })
};

exports.patch_order = function(req, res) {
    Order.updateOne({_id: req.query.id }, { active: req.body.active }, function (e, order) {
        if (e) return res.status(400).send({auth: false, message: 'Object not found'});
        return res.status(200).send({auth: true, message: 'Object field successfully updated'});
    })
};

exports.put_order = function(req, res) {
    Order.updateOne({_id: req.query.id }, { title: req.body.title }, function (e, order) {
        if (e) return res.status(400).send({auth: false, message: 'Object not found'});
        return res.status(200).send({auth: true, message: 'Object  title successfully updated'});
    })
};

exports.delete_order = function(req, res) {
    Order.findOneAndRemove({_id: req.body.id}, function (e, order) {
        if (e) return res.status(400).send({message: 'Object not found'});
        return res.status(200).send({message: 'Object successfully deleted'});
    })
};