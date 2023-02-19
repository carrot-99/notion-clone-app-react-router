const router = require("express").Router();
const User = require("../models/user");
const validation = require("../handlers/validation");
const tokenHandler = require("../handlers/tokenHandler");
const userController = require("../controllers/user");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

router.post(
    "/register", 
    body("username").isLength({min:8}).withMessage("ユーザ名は8文字以上"), 
    body("password").isLength({min:8}).withMessage("パスワードは8文字以上"), 
    body("confirmPassword").isLength({min:8}).withMessage("確認用パスワードは8文字以上"), 
    body("username").custom((value) => {
        return User.findOne({username: value}).then((user) => {
            if(user) {
                return Promise.reject("ユーザ登録済み");
            }
        });
    }), 
    validation.validate,
    userController.register
)

router.post(
    "/login",
    body("username").isLength({min:8}).withMessage("ユーザ名は8文字以上"),
    body("password").isLength({min:8}).withMessage("パスワードは8文字以上"),
    validation.validate,
    userController.login
)

router.post(
    "/verify-token",
    tokenHandler.verifyToken,
    (req, res) => {
        return res.status(200).json({user: req.user});
    }
)

module.exports = router;