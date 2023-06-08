const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: '4PK' },
    { name: '5PK' },
    { name: '6PK' },
    { name: '7PK' },
    { name: '8PK' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '4PK1005',
      description:
        'Super Belt 4PK1005 Performance Serpentine Belt',
      image: '4PK1005.png',
      category: categories[0]._id,
      price: 22.99,
      quantity: 50
    },
    {
      name: '5PK1145',
      description:
      'Super Belt 5PK1145 Performance Serpentine Belt',
      image: '5PK1145.png',
      category: categories[1]._id,
      price: 21.99,
      quantity: 50
    },
    {
      name: '6PK1015',
      category: categories[2]._id,
      description:
      'Super Belt 6PK1015 Performance Serpentine Belt',
      image: '6PK1015.png',
      price: 17.99,
      quantity: 20
    },
    {
      name: '7PK1740',
      category: categories[3]._id,
      description:
      'Super Belt 7PK1740 Performance Serpentine Belt',
      image: '7PK1740.png',
      price: 23.99,
      quantity: 50
    },
    {
      name: '8PK1535',
      category: categories[4]._id,
      description:
      'Super Belt 8PK1535 Performance Serpentine Belt',
      image: '8PK1535.png',
      price: 14.99,
      quantity: 10
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'test',
    lastName: 'test',
    email: 'test@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[2]._id, products[1]._id]
      }
    ]
  });


  console.log('users seeded');

  process.exit();
});
