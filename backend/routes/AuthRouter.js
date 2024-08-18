const { registerValidation, loginValidation } = require("../middlewares/AuthValidation");
const { register, login } = require("../Controllers/AuthController");

const router = require("express").Router();

router.post('/login', loginValidation, login);

router.post('/register', registerValidation, register);

module.exports = router;