const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    lowerCase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: 6,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  image: {
    data: Buffer,
    contentType: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//Hash the password before the user is saved to database.
adminSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    const password = await bcrypt.hash(this.password, 10);

    this.password = password;
    return next();
  } catch (error) {
    console.log(error);
  }
});

adminSchema.methods.comparePasswords = function (password) {
  //this keyword points out the recent instance of USER object
  //COMPARE HASHED PASSWORD with ENTERED ONE

  return bcrypt.compareSync(password, this.password);
};

adminSchema.methods.generateJWT = function () {
  const { JWT_SECRET } = process.env;

  const payload = {
    _id: this._id,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  return token;
};

module.exports = mongoose.model("Admin", adminSchema, "admin");
