const City = require("../model/city.model");

// using promise when searching
module.exports = async (_, res) => {
  try {
    const cities = await City.find({});
    // console.log(cities);
    res.json(cities);
  } catch (err) {
    console.log(`Error to find city `);
    console.error(err);
  }
};
