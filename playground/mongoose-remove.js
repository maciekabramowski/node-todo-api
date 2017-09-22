const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59c595e7350cf2520bf84f72'}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('59c5950d350cf2520bf84f25').then((todo)=>{
  console.log(todo);
});
