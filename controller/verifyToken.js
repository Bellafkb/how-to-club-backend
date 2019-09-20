import jwt from 'jsonwebtoken';

module.exports =  (req, res, next) => {
    const token = req.header('accessToken');
    try {
        const verified = jwt.verify(token, '123');
        req.accessToken = verified.profile;
        next();
    } catch (error) {
        res.status(400).json({
            msg: `invalid token: ${error}`
        })
    }
}