const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.all_users = function(req, res) {
    User.find({}, function (err, users) {
        res.json(users);
    })
};

exports.add_user = async function(req, res) {
    const candidate = await User.findOne({userName: req.body.userName});
    
    if (candidate) { // Пользователь существует, нужно отдать ошибку
        res.status(409).json({ message: 'This User Name exist!' })
    } else {
        const salt     = bcrypt.genSaltSync(10),
              password = req.body.password;
        const user = new User({ userName: req.body.userName, isAdmin: req.body.isAdmin, password: bcrypt.hashSync(password, salt) })
        
        user
            .save()
            .then(r => res.status(201).send({ message:' User created!' }))
            .catch(err => res.status(400).send({message: 'Something went wrong', error: err}))
    };
};

exports.login = async (req, res) => {
    const candidate = await User.findOne({userName: req.body.userName});
    
    if (candidate) {// check pass
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);

        if (passwordResult) {// generate token
            const token = jwt.sign({
                userName: candidate.userName,
                userId: candidate._id,
            }, 'secretkey', {expiresIn: 60 * 60});

            res.status(200).json({ token: `Bearer ${token}` })

        } else {// пароли не совпали
        res.status(401).json({ message: 'password not sovpadat' })
        }

  } else {// user not found
        res.status(404).json({ message: 'This User Name exist!' });
  }
};

exports.delete_user = function(req, res) {
    User.findOneAndRemove({_id: req.body.id}, function (e, user) {
        if (e) return res.status(400).send({message: 'Object not found'});
        return res.status(200).send({message: 'Object successfully deleted'});
    })
};