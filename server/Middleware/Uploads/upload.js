const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const rootDirectory = path.dirname(require.main.filename); //server.js

    cb(null, path.join(rootDirectory, "public/uploads"));
  },

  filename: function (req, file, cb) {
    console.log(req.file);
    req.image = file.fieldname + req.user._id;
    cb(null, req.image);
  },
});

const upload = multer({
  storage: storage,

  fileFilter: function (req, file, cb) {
    const extension = path.extname(file.originalname).toLowerCase();
    const validExtensions = [".png", ".jpeg", ".jpg", ".gif"];
    console.log(extension);
    if (!validExtensions.includes(extension)) {
      return cb("error");
    } else {
      return cb(null, true);
    }
  },
});

module.exports = {
  uploadImage: multer(upload),
};
