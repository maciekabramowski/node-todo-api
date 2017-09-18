// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MondoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59bfe7b143b33412fc25ff2d')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count:${count}`);
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Maciek'}).toArray().then((docs)=>{
    console.log('Users with name Maciek');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch users', err);
  });

  // db.close();
});
