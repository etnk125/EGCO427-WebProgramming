const Contact = require("../model/contact.model");

//let's try to using callback function
const IMAGE_URL = "https://fomantic-ui.com/images/avatar2/large/kristy.png";

module.exports = (req, res) => {
  if (req.body.imageUrl == "" || !req.body.imageUrl) {
    req.body.imageUrl = IMAGE_URL;
  }
  Contact.create(req.body, (err, contact) => {
    if (err) {
      console.log(`Error to add contact `);
      console.error(err);
      return res.send(err);
    }
    res.json(contact);
  });
};
