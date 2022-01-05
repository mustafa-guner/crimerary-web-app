const multer = require("multer");
const path = require("path");
const { v4 } = require("uuid");

const DIR = path.dirname(require.main.filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, path.join(DIR, "/public/uploads/"));
  },

  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, v4() + "-" + fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

module.exports = {
  uploadImage: multer(upload),
};
