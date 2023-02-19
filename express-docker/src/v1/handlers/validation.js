const { validationResult } = require("express-validator");

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    // これがないと次の処理（パスワードの暗号化とかしてるとこ）に移らない
    next();
};