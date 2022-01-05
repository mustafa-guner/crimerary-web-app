const Criminal = require("../Model/Criminal");

module.exports = {
  criminals: async (req, res, next) => {
    try {
      const criminals = await Criminal.find({});

      if (req.query.q) {
        return res.status(200).json({
          //Search by name and lastname
          criminals: await Criminal.find({
            $expr: {
              $regexMatch: {
                input: { $concat: ["$firstName", " ", "$lastName"] },
                regex: req.query.q, //Your text search here
                options: "i",
              },
            },
          }),
        });
      }

      return res.status(200).json({
        success: true,
        criminals,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },

  criminal: async (req, res, next) => {
    try {
      const { criminalID } = req.params;
      const criminal = await Criminal.findById(criminalID);
      console.log(criminal);
      return res.status(200).json({
        success: true,
        criminal: criminal,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
