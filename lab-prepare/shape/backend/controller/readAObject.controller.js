const ObjectModel = require("../model/object.model");

// using promise when searching
module.exports = async (req, res) => {
  try {
    const contact = await ObjectModel.findOne({ _id: req.params.id });
    res.json(contact);
  } catch (err) {
    console.log(`Error to find Object Id : ${res.params.id}`);
    console.error(err);
  }
};
