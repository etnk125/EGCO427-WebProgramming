const Contact = require("../model/contact.model");

module.exports = async (req, res) => {
  try {
    // store contact
    const contact = await Contact.findOne({ cid: req.params.id });

    if (!contact) {
      return res.status(400).json({
        message: `not found contact id ${req.params.id}`,
      });
    }

    const { deletedCount } = await Contact.deleteOne({ cid: req.params.id });

    if (deletedCount === 0)
      return res.status(400).json({
        message: `not found contact id ${req.params.id}`,
      });

    res.json({
      message: "This contact has been deleted",
      firstname: contact.firstname,
    });
  } catch (err) {
    console.log(`Error to delete Contact Id : ${req.params.id}`);
    console.error(err);
    res.status(400).end();
  }
};
