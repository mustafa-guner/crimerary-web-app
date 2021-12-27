const Admin = require("../Model/Admin");
const Crime = require("../Model/Crime");
const Criminal = require("../Model/Criminal");
const Category = require("../Model/Category");
const urlencoded = require("body-parser/lib/types/urlencoded");
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
      const { title, description, location, category, criminals } = req.body;

      const savedCriminals = JSON.parse(criminals);
      if (
        !title ||
        !description ||
        !location ||
        !category ||
        savedCriminals.length === 0 ||
        !req.file
      )
        return res.status(400).json({
          success: false,
          message: "Please fill all the required blanks.",
        });

      const url = req.protocol + "://" + req.get("host");

      const crimePost = await Crime.findOne({ title, description });

      if (crimePost)
        return res.status(400).json({
          success: false,
          message:
            "The crime post that has the same title had created before. Please use unique titles.",
        });

      const crime = new Crime({
        title,
        description,
        location,
        category,
        photo: url + "/public/uploads/" + req.file.filename,
        createdBy: req.auth._id,
      });

      savedCriminals.forEach((criminal) => {
        crime.criminals.push(criminal.value);
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

  editCrime: async (req, res, next) => {
    try {
      const { crimeID } = req.params;
      const url = req.protocol + "://" + req.get("host");

      const updates = {};

      if (req.body.title) updates["title"] = req.body.title;
      if (req.body.description) updates["description"] = req.body.description;
      if (req.body.category) {
        console.log(req.body.category);
        updates["category"] = req.body.category;
      }
      if (req.body.criminals) {
        console.log(req.body.criminals);
        updates["criminals"] = JSON.parse(req.body.criminals).map(
          (criminal) => criminal.value
        );
      }

      if (req.body.location) updates["location"] = req.body.location;
      if (req.body.commitedAt) updates["commitedAt"] = req.body.commitedAt;

      if (req.file)
        updates["photo"] = url + "/public/uploads/" + req.file.filename;

      console.log(updates);
      const updatedCrime = await Crime.findByIdAndUpdate(
        crimeID,
        { ...updates },
        {
          new: true,
        }
      );
      return res.status(200).json({
        success: true,
        crime: updatedCrime,
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
      const { password } = req.body;

      const admin = await Admin.findById({ _id: req.auth._id }).select(
        "+password"
      );

      const crime = await Crime.findById(id);

      if (!crime)
        return res.status(400).json({
          success: false,
          message: "Post is not found",
        });

      if (admin.comparePasswords(password)) {
        await Crime.findByIdAndRemove(id);
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(400).json({
        success: false,
        message: "Passwords doesnt match",
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
    try {
      const { firstName, lastName, gender, dob, bio } = req.body;
      let criminalDetails = {};
      if (firstName) criminalDetails["firstName"] = firstName;
      if (lastName) criminalDetails["lastName"] = lastName;
      if (gender) criminalDetails["gender"] = gender;
      if (dob) criminalDetails["dob"] = dob;
      // if (req.file) criminalDetails["photo"] = req.file.filename;
      const criminal = await Criminal.findOne({ firstName, lastName });
      if (criminal)
        return res.status(400).json({
          success: false,
          message: "Criminal is already exists",
        });
      // console.log(req.file.filename);
      // const newCriminal = new Criminal({
      //   ...criminalDetails,
      // });
      const newCriminal = new Criminal({
        firstName,
        lastName,
        gender,
        dob,
        bio,
      });
      await newCriminal.save();
      return res.status(201).json({
        success: true,
        criminal: newCriminal,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
