import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/PersonDB");

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Model parameters: (collection name, Schema)
// collection name "person" changes to it's plural form people in MongoDB

const PersonModel = mongoose.model("person", personSchema);

const person1 = new PersonModel({
  name: "Anjesh",
  age: 21,
});

const person2 = new PersonModel({
  name: "Rahul",
  age: 23,
});

const person3 = new PersonModel({
  name: "Priya",
  age: 20,
});

const personData = [person1, person2, person3];

PersonModel.insertMany(personData) // Insert(data, callback)
  .then(function () {
    console.log("Successfully saved the Data");
  })
  .catch(function (err) {
    console.log(err);
  });


// READing only the `name` values from PersonDB.

PersonModel.find()

  .then(function (person) {
    console.log(person);

    person.forEach(function (person) {
      console.log(person.name);

      mongoose.connection.close();
    });
  })

  .catch((err) => {
    console.log(err);
  });
