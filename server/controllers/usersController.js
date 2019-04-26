/**
 *@function getAllUsers: 
 *  req: {
 *      headers: {
 *          token: String
  *      }
 *  }
 * 
 *@function  addUser: 
 *  req: {
 *      body: {
 *          userName: String,
 *          password: String,
 *          isAdmin: Bool
 *      }
 *  }
 * 
 * @function login: 
 *  req: {
 *      headers: {
 *          token: String
 *      },
 *      body: {
 *          userName: String,
 *          password: String,
 *      }
 *  }
 * 
 * @function deleteUser: 
 *  req: {
 *      body: {
 *          id: String
 *      }
 *  }
 */

const User = require("../models/User");
const UserTools = require('../utils/userTools');
const Сheck = require('../utils/checkToken');

exports.getAllUsers = (req, res) => Сheck.auth(
    req.headers.token,
    res,
    () => User.find({}, (err, users) => res.json(users))
    /**
     * возвращает всех пользователей
     */
);

exports.addUser = (req, res) => UserTools.signIn(req.body, res);
/**
 * позволяет добавить пользователя
 */

exports.login = async (req, res) => UserTools.logIn(req.body, res);
/**
 * позволяет пользователю залогиниться
 */

exports.deleteUser = (req, res) => User.findOneAndRemove(
    {_id: req.body.id},
    e => e ?
     res.status(400).send({message: 'User not found.'}) :
     res.status(200).send({message: 'User successfully deleted.'})
    /**
     * позволяет удалить пользователя
     */
);

