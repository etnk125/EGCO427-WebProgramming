const ObjectModel = require("../model/object.model");

// using promise when searching
module.exports = async (_, res) => {
  try {
    const obj = await ObjectModel.find({});
    res.json(obj);
  } catch (err) {
    console.log(`Error to find all Object `);
    console.error(err);
  }
};
