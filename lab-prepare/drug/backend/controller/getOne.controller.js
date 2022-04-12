const Contact = require("../model/contact.model");

// using promise when searching
module.exports = async (req, res) => {
  try {
    const contact = await Contact.findOne({ cid: req.params.id });
    res.json(contact);
  } catch (err) {
    console.log(`Error to find Contact Id : ${res.params.id}`);
    console.error(err);
  }
};
