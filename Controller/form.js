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
        title: "Reporting Existed Missing Person",
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
        missingPersonGender,
        missingPersonBio,
      } = req.body;
      const url = req.protocol + "://" + req.get("host");
      console.log(req.body);
      if (
        !senderName ||
        !senderEmail ||
        !missingPersonLastName ||
        !missingPersonLastLocation ||
        !missingPersonDob ||
        !missingPersonName ||
        !missingPersonMissingFromDate ||
        !missingPersonGender ||
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
        title: "Reporting New Missing Person",
        missingPersonBio,
        missingPersonMissingFromDate,
        missingPersonGender,
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

  getForms: async (req, res, next) => {
    try {
      const ExistedMissingPersonForms = await ReportExisted.find({}).populate(
        "missingPerson"
      );
      const ReportedNewMissingPersonForms = await ReportNew.find({});

      console.log([
        ...ExistedMissingPersonForms,
        ...ReportedNewMissingPersonForms,
      ]);

      return res.status(200).json({
        success: true,
        forms: [...ExistedMissingPersonForms, ...ReportedNewMissingPersonForms],
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  getForm: async (req, res, next) => {
    try {
      const { formID } = req.params;
      const ExistedMissingPersonForms = await ReportExisted.findById(
        formID
      ).populate("missingpeople");
      const ReportedNewMissingPersonForms = await ReportNew.find({ formID });
      const form = ExistedMissingPersonForms
        ? ExistedMissingPersonForms
        : ReportedNewMissingPersonForms
        ? ReportedNewMissingPersonForms
        : null;
      return res.status(200).json({
        success: true,
        form,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};
