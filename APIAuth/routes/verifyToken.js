const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next){
    const token = req.header('auth-token');

    if(!token) return res.status(401).send('access denied');

    try{

        const verified = jwt.verify(token, 'MongoSecretToken');
        req.user = verified;
        next();
        
    }catch(err){
        return res.status(401).send('invalid token');
    }
}