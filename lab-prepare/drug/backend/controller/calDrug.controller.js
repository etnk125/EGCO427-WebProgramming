module.exports = (req, res) => {
  let { package, unit } = req.params;
  unit = unit.split("x");

  if (!(package && unit[0] && unit[1])) {
    return res.status(400).end("all input are required");
  }

  package = Number(package);
  unit[0] = Number(unit[0]);
  unit[1] = Number(unit[1]);

  if (!(package >= 0 && unit[0] >= 0 && unit[1] >= 0)) {
    return res.status(400).end("positive only");
  }
  res.json({
    total: String(package * unit[0] * unit[1]),
  });
};
