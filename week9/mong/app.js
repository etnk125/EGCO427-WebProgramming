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
//Query
function mQuery() {
  MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbo = database.db("EGCO427_2022");
    //var obj = {name: "Coffee Mug", price: 10}
    //var query = {name: "Coffee Mug"}
    //var query = {price: 10}
    var query = { name: /^C/ };

    dbo
      .collection("product")
      .find(query)
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        database.close();
      });
  });
}

//Sorting
function sorting() {
  MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbo = database.db("EGCO427_2022");
    var keysort = { name: -1 }; //1: ascending  -1: descending

    dbo
      .collection("product")
      .find()
      .sort(keysort)
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        database.close();
      });
  });
}
//Delete One
function deleteOne() {
  MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbo = database.db("EGCO427_2022");
    var query = { name: "Pencil" };

    dbo.collection("product").deleteOne(query, function (err, result) {
      if (err) throw err;
      console.log(query.name + " is deleted");
      database.close();
    });
  });
}

//Delete Many
function deleteMany() {
  MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbo = database.db("EGCO427_2022");
    var query = { name: /^C/ };

    dbo.collection("product").deleteMany(query, function (err, result) {
      if (err) throw err;
      console.log(result.deletedCount + " document(s) are deleted");
      database.close();
    });
  });
}

//Update One
function updateOne() {
  MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbo = database.db("EGCO427_2022");
    var query = { name: "Notebook" };
    var newvalues = { $set: { name: "Notebook", price: 30 } };

    dbo
      .collection("product")
      .updateOne(query, newvalues, function (err, result) {
        if (err) throw err;
        console.log(result.modifiedCount + " document(s) are updated");
        database.close();
      });
  });
}

//Update Many
function updateMany() {
  MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbo = database.db("EGCO427_2022");
    var query = { name: /^B/ };
    var newvalues = { $set: { name: "Notebook" } };

    dbo
      .collection("product")
      .updateMany(query, newvalues, function (err, result) {
        if (err) throw err;
        console.log(result.modifiedCount + " document(s) are updated");
        database.close();
      });
  });
}

//Drop Collection
function dropCollection() {
  MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbo = database.db("EGCO427_2022");

    dbo.collection("test").drop(function (err, result) {
      if (err) throw err;
      console.log("Collection is deleted");
      database.close();
    });
  });
}
