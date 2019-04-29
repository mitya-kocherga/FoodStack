const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signIn = async (req, res)  => {
    const { userName, password } = req;
    const isAdmin = req.isAdmin ? req.isAdmin : false;
    const candidate = await User.findOne({userName: userName});
    if (candidate) {
        res.status(409).json({message: 'This User Name exist!'})
    } else {
        const salt = bcrypt.genSaltSync(10);
        const user = new User({
            userName: userName,
            password: bcrypt.hashSync(password, salt), 
            isAdmin : isAdmin
        })
        return (
            user
             .save()
             .then(r => res.status(201).send({message:' User created!'}))
             .catch(err => res.status(400).send({message: 'Something went wrong', error: err}))
        )
        /**
         * проверяет нет ли такого имени пользователя и если ОК то создает нового
         * иначе возвращает ошибку
         */
    }
};

exports.logIn = async (req, res)  => {
    const { userName, password } = req;
    const candidate = await User.findOne({userName: userName});

    if (candidate) {
        const passwordResult = bcrypt.compareSync(password, candidate.password);
        if (passwordResult) {
            const token = jwt.sign({
                userName: candidate.userName,
                userId: candidate._id,
            }, 'secretkey', {expiresIn: '30d'});
            res.status(200).json({token: `Bearer ${token}`})
        } else {
        res.status(401).json({message: 'The entered password did not match our data.'})
        }
    } else {
        res.status(404).json({message: 'There is no such user.'});
    }
        /**
         * сравниваент введенный пароль с тем что хранится в БД
         * если ОК выдает токен
         * иначе выдает ошибку
         */
};
