const Order = require("../models/Order");

exports.allOrders = (req, res) => Order.find({}, (err, orders) => res.json(orders));

exports.addOrder = (req, res) => {
    new Order({ userName: req.body.userName, choice: req.body.choice, userID: req.body.userID })
     .save()
     .then(r => res.status(201).send({message:'Created'}))
     .catch(err => res.status(400).send({message: 'Data is empty', error: err}))
};

exports.deleteOrder = (req, res) => Order.findOneAndRemove(
    {_id: req.body.id},
    (e, order) => e ? res.status(400).send({message: 'Object not found'}) : res.status(200).send({message: 'Object successfully deleted'})
);

exports.updateOrder = (req, res) => Order.updateOne(
    {_id: req.query.id },
    { title: req.body.title },
    (e, order) => e ? res.status(400).send({message: 'Object not found'}) : res.status(200).send({message: 'Object  title successfully updated'})
);
