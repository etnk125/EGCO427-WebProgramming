const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://127.0.0.1:27017";
const dbname = "egco427_testmongo";

var obj = [
  { name: "Computer", price: 1000 },
  { name: "Cup", price: 15 },
];

function createCollection() {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    db.createCollection("egco427_p1", (err, collection) => {
      if (err) throw err;
      console.log("created");
      client.close();
    });
  });
}

function insertMany() {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    db.collection("egco427_p1").insertMany(obj, (err, result) => {
      if (err) throw err;
      console.log("insert", result.insertedCount + "items");
      client.close();
    });
  });
}
function p1() {
  MongoClient.connect(URL, (err, database) => {
    if (err) throw err;
    const db = database.db(dbname);
    const filter = { price: { $gt: 15 } };
    const keysort = { price: 1 };
    db.collection("egco427_p1")
      .find(filter)
      .sort(keysort)
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        database.close();
      });
  });
}

// createCollection();
// insertMany();
p1();
