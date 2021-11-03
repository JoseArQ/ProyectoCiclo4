const User = require('../models/users.model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


exports.login = (req, res, next) => {

    let hasheadpass = crypto.createHash('sha512').update(req.body.pass).digest('hex');

    User.findOne({ user:req.body.user, pass:hasheadpass}, (err, user) => {

        let response = {
            token: null
        }

        if (user !== null){
            response.token = jwt.sign({
                id: user._id,
                user: user.user
            }, '__recret__');
        }

        res.json(response);
    });
}