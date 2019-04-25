const Menu = require("../models/Menu");

exports.allMenus = (req, res) => // возвращает все меню
    Menu
     .find({}, (err, orders) => res.json(orders))
     .catch( err => res.status(400).send({ message: 'something went wrong'}));

exports.addMenu = (req, res) => {//добавляет меню
    new Menu({ menu: req.body.menu })
     .save()
     .then(r => res.status(201).send({message:'Created'}))
     .catch(err => res.status(400).send({ message: 'something went wrong'}));
};

exports.deleteMenu = (req, res) => //находит один меню и удаляет
    Menu.findOneAndRemove(
        {_id: req.body.id},
        (e, order) => 
            e ? res.status(400).send({message: 'Object not found'})
            : res.status(200).send({message: 'Object successfully deleted'})
    )

exports.updateMenu = (req, res) => 
    Menu.updateOne(
        {_id: req.body.id},
        { title: req.body.title },
        (e, order) =>
            e ? res.status(400).send({message: 'Object not found'})
            : res.status(200).send({message: 'Object successfully updated'})
    )

