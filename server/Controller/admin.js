const Admin = require("../Model/Admin");
const Crime = require("../Model/Crime");
const Criminal = require("../Model/Criminal");

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { email, password, username, firstName, lastName } = req.body;

      const admin = new Admin({
        email,
        password,
        username,
        firstName,
        lastName,
      });

      await admin.save();

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
      await Admin.findByIdAndRemove(id);
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
        createdBy: req.auth._id,
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
    // try {
    //   const { username, firstName, lastName, email } = req.body;
    //   const id = req.params.id;
    //   let updates = {};
    //   console.log(req.file);
    //   if (username) {
    //     updates["username"] = username;
    //   }
    //   if (firstName) {
    //     updates["firstName"] = firstName;
    //   }
    //   if (lastName) {
    //     updates["lastName"] = lastName;
    //   }
    //   if (email) {
    //     updates["email"] = email;
    //   }
    //   if (req.image) {
    //   }
    //   const user = await Admin.findByIdAndUpdate(
    //     id,
    //     { ...updates },
    //     { new: true }
    //   );
    //   return res.status(200).json({
    //     success: true,
    //     user: user,
    //   });
    // } catch (error) {
    //   return res.status(500).json({
    //     success: false,
    //     error: error.message,
    //   });
    // }
  },

  createCriminal: async (req, res, next) => {
    // try {
    //   const { fullName, gender, dob } = req.body;
    //   let criminalDetails = {};
    //   if (fullName) criminalDetails["fullName"] = fullName;
    //   if (gender) criminalDetails["gender"] = gender;
    //   if (dob) criminalDetails["dob"] = dob;
    //   if (req.file) criminalDetails["photo"] = req.file.filename;
    //   const criminal = await Criminal.findOne({ fullName });
    //   if (criminal)
    //     return res.status(400).json({
    //       success: false,
    //       message: "Criminal is already exists",
    //     });
    //   console.log(req.file.filename);
    //   const newCriminal = new Criminal({
    //     ...criminalDetails,
    //   });
    //   await newCriminal.save();
    //   return res.status(201).json({
    //     success: true,
    //     criminal: newCriminal,
    //   });
    // } catch (error) {
    //   return res.status(500).json({
    //     success: false,
    //     error: error.message,
    //   });
    // }
  },
};
