const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  car: {
    type: String,
    required: true
  }
  // set this to use virtual below
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
});

// userSchema.virtual('application').get(function () {
//   const application = {
//     make : car.make,
//     model : car.model,
//     year : car.year,
//     engine : car.engine
//   }
//   return application;
// });
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
