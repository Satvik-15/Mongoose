### Mongoose Tutorial

This tutorial will teach you how to use Mongoose, a MongoDB Object Document Mapper (ODM) for Node.js.

## Installation

To install Mongoose, run the following command:

```
npm install mongoose
```

## Creating a Schema

A schema is a blueprint for your data. It defines the structure of your data and the types of fields that can be stored in it.

To create a schema, use the `mongoose.Schema()` method. For example:

```
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});
```

The `name`, `rating`, and `review` fields are all of type `String`. You can also specify other types of fields, such as `Number`, `Boolean`, or `Date`.

## Creating a Model

A model is an instance of a schema. It is used to create, read, update, and delete documents from a MongoDB database.

To create a model, use the `mongoose.model()` method. For example:

```
const Fruit = mongoose.model("Fruits", fruitSchema);
```

The first argument to the `mongoose.model()` method is the name of the model. The second argument is the schema for the model.

## Creating a Document

A document is a record of data that is stored in a MongoDB database. To create a document, use the `new` keyword. For example:

```
const fruit = new Fruit({
  name: "Apple",
  rating: 5,
  review: "Very good",
});
```

The `fruit` object is now a document that can be stored in a MongoDB database.

## Reading a Document

To read a document, use the `find()` method. For example:

```
Fruit.findOne({ name: "Apple" });
```

The `findOne()` method will return the first document that matches the specified criteria.

