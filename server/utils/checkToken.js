const jwt = require('jsonwebtoken');

exports.checkToken = async token => {
    let candidate;
    jwt.verify(token, 'secretkey', (err, user) => err ? candidate = false : candidate = user);
    return { user: candidate }
    /**
     * Функция проверяет токен 
     * если все ОК воозвращает userName и userId в объекте 'user'
     * иначе возвращает user: false
     */
};

exports.auth = async (token, res, callback) => {
    if (token) {
        const chk = await this.checkToken( token );
        if ( chk.user ) {
            return callback(chk.user);
        } else {
            return res.status(401).send({auth: false, message: 'Please login'})
        }
    } else { 
        return res.status(401).send({auth: false, message: 'Please login'})
    }
    /**
     * Функция проверяет наличие токена
     * проверяет его валидность и если все ОК вызывает колбек функцию
     * иначе возвращает ответ со статусом 401
     */
};
