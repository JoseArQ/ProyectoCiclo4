const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(`token is ${token}`);
        const decode = jwt.verify(token, '__recret__');

        req.user = decode;
        next()
    } catch (error) {
        res.status(401);
        res.json({code: 4, msg:"dont have authorization"});
    }
}

module.exports = auth