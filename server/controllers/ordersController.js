/**
 *@function getAllOrders: 
 *  req: {
 *      headers: {
 *          token: String,
 *          all: Bool
 *      }
 *  }
 * 
 *@function  addOrder: 
 *  req: {
 *      headers: {
 *          token: String
 *      },
 *      body: {
 *          choice: Array
 *      }
 *  }
 * 
 * @function deleteOrder: 
 *  req: {
 *      headers: {
 *          token: String
 *      },
 *      body: {
 *          id: String
 *      }
 *  }
 * 
 * @function updateOrder: 
 *  req: {
 *      headers: {
 *          token: String
 *      },
 *      body: {
 *          id: String,
 *          choice: Array  same as in addOrder method
 *      }
 *  }
 */


const Order = require("../models/Order");
const Сheck = require('../utils/checkToken');

exports.getAllOrders = async (req, res) => Сheck.auth( req.headers.token, res,
    user => req.headers.all ? 
        Order.find({}, (e, orders) => res.json({auth: true, orders})) :
        Order.find({userName: user.userName, isAdmin: user.isAdmin}, (e, orders) => res.json(orders))
    /**если в заголовке запроса присутствует флаг all == true возвращает ВСЕ значения
     * иначе возвращает Ордеры только для данного пользователя
     */
);

exports.addOrder = (req, res) => Сheck.auth( req.headers.token, res,
    user => new Order({ userName: user.userName, userID: user.userId, choice: req.body.choice })
        .save()
        .then( () => res.status(201).send({message:'Created'}))
        .catch(err => res.status(400).send({message: 'Data is empty', error: err}))
    /**
     * позволяет добавить заказ
     */
);

exports.deleteOrder = (req, res) => Сheck.auth( req.headers.token, res,
    () => Order.findOneAndRemove(
        {_id: req.body.id},
        e => e ? res.status(404).send({message: 'Object not found'}) : res.status(200).send({message: 'Object successfully deleted'})
    /**
     * позволяет удалить заказ
     */
    )
)

exports.updateOrder = (req, res) => Сheck.auth( req.headers.token, res,
    () =>  Order.updateOne(
        {_id: req.body.id },
        {choice: req.body.choice},
        e  => e ? res.status(404).send({message: 'Object not found'}) : res.status(200).send({message: 'Object  title successfully updated'})
    /**
     * позволяет изменить заказ
     */
    )
)
