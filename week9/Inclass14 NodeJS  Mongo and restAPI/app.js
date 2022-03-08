const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();

const URL = "mongodb://127.0.0.1:27017";
const dbname = "egco427_testmongo";
const collectionName = "students";
const students = [
  {
    // _id: new ObjectId("5e6caaf17822cf7b5b1b6416"),
    id: 1,
    firstname: "Bob",
    lastname: "Cat",
    age: 21,
    major: "Math",
  },

  {
    // _id: new ObjectId("5e6caaf17822cf7b5b1b6418"),
    id: 2,
    firstname: "Tom",
    lastname: "Cat",
    age: 18,
    major: "Science",
  },

  {
    // _id: new ObjectId("5e6caaf17822cf7b5b1b641a"),
    id: 3,
    firstname: "Marry",
    lastname: "Lamb",
    age: 19,
    major: "Social Study",
  },

  {
    // _id: new ObjectId("5e6caaf17822cf7b5b1b641c"),
    id: 4,
    firstname: "Linda",
    lastname: "Lamb",
    age: 21,
    major: "IT",
  },
];
const student = {
  id: 5,
  firstname: "Adam",
  lastname: "Zoo",
  age: 22,
  major: "Math",
};
//------------------------express---------------------------
const server = app.listen(8081, () => {
  console.log(
    `server is running on ${server.address().address} ${server.address().port} `
  );
});
app.get("/showMajor/:major", (req, res) => {
  showMajor(req.params, (result) => {
    res.end(JSON.stringify(result, null, 2));
  });
});
app.get("/showAgeLessThan/:age", (req, res) => {
  showAgeLessThan(req.params, (result) => {
    res.end(JSON.stringify(result, null, 2));
  });
});
app.get("/updateLastname/:target/:lastname", (req, res) => {
  updateLastname(req.params);
  getAllData((result) => res.end(JSON.stringify(result, null, 2)));
});
app.get("/insertStudent/:id/:firstname/:lastname/:age/:major", (req, res) => {
  insertStudent(req.params);
  getAllData((result) => res.end(JSON.stringify(result, null, 2)));
});
//----------------------------mongo------------------------------------
initData();
function initData() {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    db.collection(collectionName).drop((err, result) => {
      if (err) throw err;
      console.log(collectionName + "deleted");
    });
    db.collection(collectionName).insertMany(students, (err, result) => {
      if (err) throw err;
      console.log("insertMany: " + result.insertedCount + "items");
      client.close();
    });
  });
}
function showMajor({ major }, callback = null) {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    // const query = { major: `/${major}/i` };
    const query = { major: major };
    db.collection(collectionName)
      .find(query)
      .toArray((err, result) => {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        client.close();
        if (callback) callback(result);
      });
  });
}
function showAgeLessThan({ age }, callback = null) {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    const query = { age: { $lt: +age } };
    db.collection(collectionName)
      .find(query)
      .toArray((err, result) => {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        client.close();
        if (callback) callback(result);
      });
  });
}
function updateLastname({ target, lastname }, callback = null) {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    const query = { lastname: target };
    const replacer = { $set: { lastname: lastname } };
    db.collection(collectionName).updateMany(query, replacer, (err, result) => {
      if (err) throw err;
      console.log(result.modifiedCount + "document(s) updated");
      client.close();
      if (callback) callback(result);
    });
  });
}
function insertStudent(
  { id, firstname, lastname, age, major },
  callback = null
) {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    db.collection(collectionName).insertOne(
      { id: parseInt(id), firstname, lastname, age: parseInt(age), major },
      (err, result) => {
        if (err) throw err;
        console.log("insert", result.insertedId);
        client.close();
        if (callback) callback(result);
      }
    );
  });
}
function getAllData(callback = null) {
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    db.collection(collectionName)
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        callback(result);
        client.close();
      });
  });
}
