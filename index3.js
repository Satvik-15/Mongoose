// Data Validation && C.R.U.D. in Mongoose.

import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/breakfastDB");

// Data Validation.

const breakfastSchema = new mongoose.Schema({
  eggs: {
    type: Number,
    require: true,
    min: [5, "Too few eggs"], // [number, error]
    max: [36, "Too many eggs"], // [number, error]
  },
  bacon: {
    type: Number,
    required: [true, "Why no bacon?"],
  },
  drink: {
    type: String,
  },
});

const breakfastModel = mongoose.model("breakfast", breakfastSchema);

const breakfast1 = new breakfastModel({
  eggs: 7,
  bacon: 10,
  drink: "kkkkk",
});

const breakfast2 = new breakfastModel({
  eggs: 7,
  bacon: 1,
  drink: "momomommo",
});



// CREATE

breakfastModel.insertMany([breakfast1, breakfast2])
  .then(() => {
    console.log("Inserted");
  })
  .catch((err) => {
    console.log(err);
  });

// READ

breakfastModel.find()
  .then((breakfast) => {
    console.log(breakfast);
  })
  .catch((err) => {
    console.log(err);
  });

// UPDATE

breakfastModel.updateOne({ _id: "64cf8b67443d66be58d74061" }, { eggs: 7 })
  .then(() => {
    console.log("Updated!!");
  })
  .catch((err) => {
    console.log(err);
  });

// DELETE

breakfastModel.deleteOne({ _id: "64cf8b67443d66be58d74060" })
  .then(() => {
    console.log("Deleted!");
  })
  .catch((err) => {
    console.log(err);
  });
