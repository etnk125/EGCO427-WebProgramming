// TODO: Read data from user.json
// TODO: Creat RESTful API insert data from http://localhost:8081/insertUser/:name/:password/:occu/:id
// TODO: Show Inserted data
const app = require("express")();
const fs = require("fs");
const PATH = "/user.json";
let users = {};

fetchData();
/**
 * It reads the file from the path and parses it into a JSON object.
 */
function fetchData() {
  fs.readFile(__dirname + PATH, "utf8", (err, resp) => {
    if (err) throw err;
    users = JSON.parse(resp);
  });
}

/**
 * It takes in a parameter object and returns a user object.
 * @param params - The parameters passed to the function.
 */
const user = (params) => ({
  name: params.name,
  password: params.password,
  occupation: params.occu,
  id: Number(params.id),
});

/* A RESTful API. */
app.get("/insertUser/:name/:password/:occu/:id", (req, res) => {
  users["user" + req.params.id] = user(req.params);
  console.log(users);
  res.end(JSON.stringify(users, null, 2));
});

/* A callback function. It is used to run a function when the server is listening. */
const server = app.listen(8081, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`ran on ${host}:${port}`);
});
