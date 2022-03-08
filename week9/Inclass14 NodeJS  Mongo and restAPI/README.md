# Inclass14: NodeJS : Mongo and restAPI
## Due tomorrow at 11:59 PMCloses March 11, 2022 11:59 PM
### Instructions
Follow the instruction below for this practice.
Please submit the app.js but rename to app_studentID.txt. E. app_61234567.txt

# ----------------------- Instruction ----------------------
Collection: students

| id  | firstname | lastname | age | major        |
| --- | --------- | -------- | --- | ------------ |
| 1   | Bob       | Cat      | 21  | Math         |
| 2   | Tom       | Cat      | 18  | Science      |
| 3   | Marry     | Lamb     | 19  | Social Study |
| 4   | Linda     | Lamb     | 21  | IT           |

------------------------------------------------------------------


Output shows the JSON data on the web browser by calling the URL.
Example

- [x] Find students who are in the major "Science"

   - http://localhost:8081/showMajor/Science
---
- [x]  Find students that their age < 20 and sort by descending
   - http://localhost:8081/showAgeLessThan/20
---
- [x]  Update the lastname of students "Lamb" to be "Fox"
   - http://localhost:8081/updateLastname/Lamb/Fox
---
- [x]  Insert new student {id: 5, firstname: "Adam", lastname: "Zoo", age: 22, major: "Math"}
   - http://localhost:8081/insertStudent/5/Adam/Zoo/22/Math
---
# ----------- students------------------
```JSON
{
    "_id" : ObjectId("5e6caaf17822cf7b5b1b6416"),
    "id" : 1,
    "firstname" : "Bob",
    "lastname" : "Cat",
    "age" : 21,
    "major" : "Math"
}

{
    "_id" : ObjectId("5e6caaf17822cf7b5b1b6418"),
    "id" : 2,
    "firstname" : "Tom",
    "lastname" : "Cat",
    "age" : 18,
    "major" : "Science"
}

{
    "_id" : ObjectId("5e6caaf17822cf7b5b1b641a"),
    "id" : 3,
    "firstname" : "Marry",
    "lastname" : "Lamb",
    "age" : 19,
    "major" : "Social Study"
}

{
    "_id" : ObjectId("5e6caaf17822cf7b5b1b641c"),
    "id" : 4,
    "firstname" : "Linda",
    "lastname" : "Lamb",
    "age" : 21,
    "major" : "IT"
}

{
    "_id" : ObjectId("5e6f7d0fafffa036fa37b892"),
    "id" : 5,
    "firstname" : "Adam",
    "lastname" : "Zoo",
    "age" : 22,
    "major" : "Math"
}
```
---
