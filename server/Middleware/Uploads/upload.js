const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const rootDirectory = path.dirname(require.main.filename); //server.js

    cb(null, path.join(rootDirectory, "public/uploads"));
  },

  filename: function (req, file, cb) {
    console.log(req.image);
    req.image = file.fieldname + req.auth._id;
    cb(null, req.image + path.extname(file.originalname));
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
