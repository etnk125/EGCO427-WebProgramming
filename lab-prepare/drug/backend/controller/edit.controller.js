const Contact = require("../model/contact.model");

// using promise when searching
module.exports = async (req, res) => {
  try {
    const { modifiedCount } = await Contact.updateOne(
      { cid: req.params.id },
      req.body
    );
    const contact = await Contact.findOne(req.body);
    res.json(contact);
  } catch (err) {
    console.log(`Error to update Contact Id : ${res.params.id}`);
    console.error(err);
    res.status(400).end();
  }
};
