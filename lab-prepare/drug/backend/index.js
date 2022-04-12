const app = require("./app");

// port config
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server is running on ${host}:${port}`);
});
