const User = require("../Model/User");
const Crime = require("../Model/Crime");

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { email, password, username, firstName, lastName, role } = req.body;

      const user = await User.findOne({ email: email });
      if (user)
        return res
          .status(400)
          .json({ success: false, message: "User is already exists!" });

      const newUser = new User({
        email,
        password,
        username,
        firstName,
        lastName,
        role,
      });

      await newUser.save();

      return res.status(201).json({
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  removeUser: async (req, res, next) => {
    try {
      const id = req.params.id;
      console.log(req.params);
      console.log(id);
      await User.findByIdAndRemove(id);
      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  createCrime: async (req, res, next) => {
    try {
      const { title, description, location } = req.body;
      const crimePost = await Crime.findOne({ title, description });
      if (crimePost)
        return res.status(400).json({
          success: false,
          message: "Post is already created before.",
        });

      const crime = new Crime({
        title,
        description,
        location,
        createdBy: req.user.id,
      });

      await crime.save();

      return res.json({
        crime,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  removeCrime: async (req, res, next) => {
    try {
      const id = req.params.crimeID;
      const crime = await Crime.findById(id);
      if (!crime)
        return res.status(400).json({
          success: false,
          message: "Post is not found",
        });

      await Crime.findByIdAndRemove(id);
      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  editCredentials: async (req, res, next) => {
    try {
      const { username, firstName, lastName, email } = req.body;
      const id = req.params.id;
      let updates = {};

      console.log(req.file);
      if (username) {
        updates["username"] = username;
      }
      if (firstName) {
        updates["firstName"] = firstName;
      }

      if (lastName) {
        updates["lastName"] = lastName;
      }

      if (email) {
        updates["email"] = email;
      }

      if (req.image) {
      }

      const user = await User.findByIdAndUpdate(
        id,
        { ...updates },
        { new: true }
      );
      return res.status(200).json({
        success: true,
        user: user,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
