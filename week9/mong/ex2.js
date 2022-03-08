const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://127.0.0.1:27017";
const dbname = "egco427_testmongo";
const collectionName = "student_records";

var obj = [
  {
    name: "Bob",
    courseid: "egci111",
    coursename: "computer programming",
    mark: 80,
  },
  {
    name: "Tom",
    courseid: "egci111",
    coursename: "computer programming",
    mark: 50,
  },
  { name: "Sue", courseid: "egci427", coursename: "Web programming", mark: 90 },
  {
    name: "John",
    courseid: "egci427",
    coursename: "Web programming",
    mark: 70,
  },
  {
    name: "Jame",
    courseid: "egci472",
    coursename: "Web programming",
    mark: 60,
  },
];

function insertMany() {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    db.collection(collectionName).insertMany(obj, (err, result) => {
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
    const filter = { coursename: "computer programming" };
    // const keysort = { name: 1 };
    db.collection(collectionName)
      .find(filter)
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        database.close();
      });
  });
}
function p2() {
  MongoClient.connect(URL, (err, database) => {
    if (err) throw err;
    const db = database.db(dbname);
    const filter = { mark: { $gt: 60 } };
    // const keysort = { name: 1 };
    db.collection(collectionName)
      .find(filter)
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        database.close();
      });
  });
}
function p3() {
  MongoClient.connect(URL, (err, database) => {
    if (err) throw err;
    const db = database.db(dbname);
    const filter = { name: /^J/ };
    // const keysort = { name: 1 };
    db.collection(collectionName)
      .find(filter)
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        database.close();
      });
  });
}

// insertMany();
p1();
p2();
p3();
