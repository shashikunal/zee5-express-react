const { Router } = require("express");
const { SignUp, SignIn } = require("../controllers/auth");
const router = Router();

router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);

module.exports = router;
