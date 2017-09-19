// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MondoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59c05c6dab508ff29e559d3c')
  // }, {
  //   $set:{
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59bfe9112cc019054c414bd9')
  },{
    $set:{
      name: 'Maciek'
    },
    $inc:{
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });



  // db.close();
});
