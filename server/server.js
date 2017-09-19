var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// },(e)=>{
//   console.log('Unable to save todo');
// });

var otherTodo = new Todo({
  text: 'Something to do'
});

// otherTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// },(e)=>{
//   console.log('Unable to save todo', e);
// });




var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var User1 = new User({
  email: 'email@email.com'
});

User1.save().then((doc)=>{
  console.log('Saved user', doc);
},(e)=>{
  console.log('Unable to save user', e);
});
