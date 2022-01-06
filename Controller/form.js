const ReportNew = require("../Model/ReportNewForm");
const ReportExisted = require("../Model/ReportExistedForm");

module.exports = {
  reportExistedMissingPerson: async (req, res, next) => {
    try {
      const { senderName, senderEmail, missingPerson, seenLocation, notes } =
        req.body;

      console.log(req.body);
      if (
        !senderName ||
        !senderEmail ||
        !missingPerson ||
        !seenLocation ||
        !notes
      ) {
        return res.status(400).json({
          success: false,
          message: "Please fill all the blanks.",
        });
      }

      const existReport = new ReportExisted({
        senderName,
        senderEmail,
        missingPerson,
        seenLocation,
        notes,
      });

      await existReport.save();

      return res.status(200).json({
        success: true,
        form: existReport,
        message: "Your form successfully sent. Thanks!",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  reportNewMissingPerson: async (req, res, next) => {
    try {
      const {
        senderName,
        senderEmail,
        missingPersonName,
        missingPersonLastName,
        missingPersonDob,
        missingPersonMissingFromDate,
        missingPersonLastLocation,
        missingPersonBio,
      } = req.body;
      const url = req.protocol + "://" + req.get("host");

      if (
        !senderName ||
        !senderEmail ||
        !missingPersonLastName ||
        !missingPersonLastLocation ||
        !missingPersonDob ||
        !missingPersonName ||
        !missingPersonMissingFromDate ||
        !missingPersonBio ||
        !req.file
      ) {
        return res.status(400).json({
          success: false,
          message: "Please fill all the blanks.",
        });
      }

      const newReport = new ReportNew({
        senderName,
        senderEmail,
        missingPersonName,
        missingPersonLastName,
        missingPersonDob,
        missingPersonBio,
        missingPersonMissingFromDate,
        missingPersonLastLocation,
        photo: url + "/public/uploads/" + req.file.filename,
      });

      await newReport.save();

      return res.status(200).json({
        success: true,
        form: newReport,
        message: "Your form successfully sent. Thanks!",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
