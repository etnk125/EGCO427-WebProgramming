const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://127.0.0.1:27017";

function createCollection() {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db("egco427_testmongo");
    db.createCollection("egco427_mongo_prod", (err, collection) => {
      if (err) throw err;
      console.log("created");
      client.close();
    });
  });
}

function insertOne() {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db("egco427_testmongo");
    const obj = { name: "mug of coffee", price: 20 };
    db.collection("egco427_mongo_prod").insertOne(obj, (err, result) => {
      if (err) throw err;
      console.log("insert", result.insertedId);
      client.close();
    });
  });
}
function insertMany() {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db("egco427_testmongo");
    const obj = [
      { name: "mug of coffee", price: 20 },
      { name: "mug of coff1e", price: 230 },
      { name: "mug of cof2e", price: 210 },
      { name: "mug of co3ee", price: 220 },
    ];
    db.collection("egco427_mongo_prod").insertMany(obj, (err, result) => {
      if (err) throw err;
      console.log("insert", result.insertedCount + "items");
      client.close();
    });
  });
}
function findOne() {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db("egco427_testmongo");
    // const obj = { name: "mug of coffee", price: 20 };
    db.collection("egco427_mongo_prod").findOne({}, (err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
  });
}
function findMany() {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db("egco427_testmongo");
    db.collection("egco427_mongo_prod")
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        client.close();
      });
  });
}

// findMany();
createCollection();
