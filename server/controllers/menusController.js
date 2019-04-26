/**
 *@function getMenus: 
 *  req: {
 *      headers: {
 *          token: String,
 *          all: Bool
 *      }
 *  }
 * 
 *@function  addMenu: 
 *  req: {
 *      headers: {
 *          token: String
 *      },
 *      body: {
 *          menu: Array,
 *          created_for: Date
 *      }
 *  }
 * 
 * @function deleteMenu: 
 *  req: {
 *      headers: {
 *          token: String
 *      },
 *      body: {
 *          id: String
 *      }
 *  }
 * 
 * @function updateMenu: 
 *  req: {
 *      headers: {
 *          token: String
 *      },
 *      body: {
 *          id: String,
 *          menu: Array  same as in addMenu method
 *      }
 *  }
 */


const Menu = require("../models/Menu");
const Сheck = require('../utils/checkToken');

exports.getMenus = (req, res) => Сheck.auth(
    req.headers.token,
    res,
    () =>
        req.headers.all ?
            Menu
             .find({}, (err, orders) => res.json(orders))
             .catch( err => res.status(400).send({message: 'Something went wrong.', error: err})) :
            Menu
             .find({created_for: req.body.created_for }, (err, orders) => res.json(orders))
             .catch( err => res.status(400).send({message: 'Something went wrong.', error: err}))
    /**
    * если в заголовке запроса присутствует флаг all == true возвращает ВСЕ значения
    * иначе возвращает меню на определенную дату
    */
);

exports.addMenu = (req, res) => Сheck.auth(
    req.headers.token,
    res,
    () => 
    new Menu({ menu: req.body.menu, created_for: req.body.created_for})
     .save()
     .then(r => res.status(201).send({message:'Created'}))
     .catch(err => res.status(400).send({message: 'Something went wrong.', error: err}))
    /**
    * позволяет добавить меню для определенной даты
    *  если дата не выбрана атвоматически выбирается *завтра
    */
);


exports.deleteMenu = (req, res) => Сheck.auth(
    req.headers.token,
    res,
    () => Menu.findOneAndRemove(
        {_id: req.body.id},
        e => e ? res.status(400).send({message: 'Object not found', error: e}) : res.status(200).send({message: 'Object successfully deleted'})
    )
    /**
    * позволяет удалить меню
    */
);

exports.updateMenu = (req, res) => Сheck.auth(
    req.headers.token,
    res,
    () => Menu.updateOne(
        {_id: req.body.id},
        { title: req.body.title },
        e => e ? res.status(400).send({message: 'Object not found', error: e}) : res.status(200).send({message: 'Object successfully updated'})
    )
    /**
    * позволяет обновить меню
    */
);

