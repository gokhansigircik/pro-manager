const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema(
  {
    subtitle: {
      type: String,
      required: [true, 'Task is required'],
      minlength: [4, 'Title name must be at least 4 characters long']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [1, 'Price should not be negative'],
      max: [10000, 'Price is limited 10000']
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    // isComplete: boolean,
  },
  { timestamps: true }
);

const Manager = mongoose.model("Manager", managerSchema);
module.exports = Manager;
