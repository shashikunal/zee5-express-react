const AuthSchema = require("../models/Auth");

/* logic description
@http request method => POST
    @access Public
    url => api/auth/signup
*/
exports.SignUp = async (req, res) => {
  // write signup logic here
  let { username, email, role, password } = req.body;
  try {
    let payload = {
      username,
      email,
      role,
      password,
    };

    //save into database
    let data = await AuthSchema.create(payload);
    res.status(201).json({ message: "successfully user created", data });
  } catch (err) {
    console.error(err);
    res.status(501).json("server error");
  }
};

/*@http request method => POST
    @access Public
    url => api/auth/signin
*/
exports.SignIn = (req, res) => {
  // write signIn logic here
  res.send("ok is working signin");
};
