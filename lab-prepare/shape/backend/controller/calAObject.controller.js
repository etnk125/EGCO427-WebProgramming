const ObjectModel = require("../model/object.model");

module.exports = (req, res) => {
  let { height, width, depth } = req.params;

  if (!(height && width && depth)) {
    return res.status(400).end("all input are required");
  }

  height = Number(height);
  width = Number(width);
  depth = Number(depth);

  if (!(height >= 0 && width >= 0 && depth >= 0)) {
    return res.status(400).end("positive only");
  }
  res.json({
    area: String(height * width),
    volume: String(height * width * depth),
  });
};
