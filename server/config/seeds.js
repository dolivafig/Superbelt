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
      name: '4PK925',
      description:
        'Super Belt 4PK925 Performance Serpentine Belt',
      image: '4PK925.jpg',
      category: categories[0]._id,
      price: 10.99,
      quantity: 50,
      car: 'FORD-MUSTANG-YR_[2012]-3.7L_V6'
    }, 
    {
      name: '4PK960',
      description:
        'Super Belt 4PK960 Performance Serpentine Belt',
      image: '4PK960.jpg',
      category: categories[0]._id,
      price: 11.99,
      quantity: 50,
      car: 'CHEVROLET-SILVERADO_1500-YR_[2000]-5.3L_V8'
    },
    {
      name: '4PK880',
      description:
        'Super Belt 4PK880 Performance Serpentine Belt',
      image: '4PK880.jpg',
      category: categories[0]._id,
      price: 11.99,
      quantity: 50,
      car: 'TOYOTA-CAMRY-YR_[03-05]-3.0L'
    },
    {
      name: '5PK1145',
      description:
      'Super Belt 5PK1145 Performance Serpentine Belt',
      image: '5PK1145.png',
      category: categories[1]._id,
      price: 21.99,
      quantity: 50,
      car: 'TOYOTA-CAMRY-YR_[03-05]-3.0L'

    },
    {
      name: '6PK1390',
      category: categories[2]._id,
      description:
      'Super Belt 6PK1390 Performance Serpentine Belt',
      image: '6PK1390.jpg',
      price: 17.99,
      quantity: 20,
      car: 'FORD-F150-YR_[12/14/16/18]-3.3L'
    },
    {
      name: '6PK2135',
      category: categories[2]._id,
      description:
      'Super Belt 6PK2135 Performance Serpentine Belt',
      image: '6PK2135.jpg',
      price: 19.99,
      quantity: 25,
      car: 'HONDA-ACCORD-YR_[03/08/12]-3.0L/3.5L'
    },
    {
      name: '6PK2225',
      category: categories[2]._id,
      description:
      'Super Belt 6PK2225 Performance Serpentine Belt',
      image: '6PK2225.jpg',
      price: 22.99,
      quantity: 15,
      car: 'JEEP-WRANGLER-YR_[2012]-3.6L_V6'
    },
    {
      name: '6PK2455',
      category: categories[2]._id,
      description:
      'Super Belt 6PK2455 Performance Serpentine Belt',
      image: '6PK2455.jpg',
      price: 26.99,
      quantity: 15,
      car:'JEEP-WRANGLER-YR_[2012]-3.6L_V6'
    },
    {
      name: '7PK1870',
      category: categories[3]._id,
      description:
      'Super Belt 7PK1870 Performance Serpentine Belt',
      image: '7PK1870.jpg',
      price: 28.99,
      quantity: 10,
      car: 'TOYOTA-TACOMA-YR_[05-10]-2.7L'
    },
    {
    name: '7PK1935',
    category: categories[3]._id,
    description:
    'Super Belt 7PK1935 Performance Serpentine Belt',
    image: '7PK1935.jpg',
    price: 29.99,
    quantity: 5,
    car: 'TOYOTA-CAMRY-YR_[03-05]-2.4L'
  },
    {
      name: '8PK1675',
      category: categories[4]._id,
      description:
      'Super Belt 8PK1675 Performance Serpentine Belt',
      image: '8PK1675.jpg',
      price: 14.99,
      quantity: 10,
      car: 'TOYOTA-CAMRY-YR_[03-05]-2.4L'

    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'test',
    lastName: 'test',
    email: 'test@test.com',
    password: 'test12345',
    orders: [
      {
        products: [products[0]._id, products[2]._id, products[1]._id]
      }
    ]
  });


  console.log('users seeded');

  process.exit();
});
