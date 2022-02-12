const { model, Schema } = require("mongoose");
const bcrypt = require("bcryptjs");
const AuthSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please add username"],
    },
    email: {
      type: String,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ],
      unique: true,
      required: [true, "Please add valid email address"],
    },
    role: {
      type: String,
      enum: ["user", "publisher"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 6,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: String,
  },
  { timestamps: true }
);

//?hash password
AuthSchema.pre("save", async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = model("user", AuthSchema);
