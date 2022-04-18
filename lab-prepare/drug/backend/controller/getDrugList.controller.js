const DrugModel = require("../model/drug.model");

// using promise when searching
module.exports = async (_, res) => {
  try {
    const obj = await DrugModel.find({});
    res.json(obj);
  } catch (err) {
    console.log(`Error to find all drug `);
    console.error(err);
    return res.status(400).end("Error to find all drug ");
  }
};
