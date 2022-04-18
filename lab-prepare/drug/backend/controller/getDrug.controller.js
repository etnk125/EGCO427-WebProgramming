const DrugModel = require("../model/drug.model");

// using promise when searching
module.exports = async (req, res) => {
  try {
    const drug = await DrugModel.findOne({ _id: req.params.id });
    res.json(drug);
  } catch (err) {
    console.log(`Error to find drug Id : ${res.params.id}`);
    console.error(err);
    return res.status(400).end(`Error to find drug Id : ${res.params.id}`);
  }
};
