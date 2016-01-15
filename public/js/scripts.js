console.log('...loaded');

//Send request to create a user
function createUser(userData, callback) {
  $.ajax({
    method: 'post',
    url: 'api/users',
    data: {user: userData},
    success: function(data){
      callback(data)
    }
  });
}

//Create a form handler for Create User

//Send request to update a user
function updateUser(userData, callback){
  $.ajax({
    method: 'patch',
    url: '/api/users',
    data: {user: userData},
    success: function(data){
      callback(data);
    }
  });
}

//crate a form handler for Update User

//Send a request to LogIn
function logInUser(usernameAttempt, passwordAttempt, callback) {
  $.ajax({
    method: 'post',
    url: '/api/users/authenticate',
    data: {username: usernameAttempt, password: passwordAttempt},
    success: function(data){
      callback(data);
    }
  });
}

// create a from handler for user Login


// Get all Users
function getAllUsers(callback){
  callback = callback || function(){};
  $.ajax({
    url: '/api/users',
    success: function(data){
      var users = data.users || [];
      callback(users);
    }
  })
}

// Render Users
function renderUsers(usersArray){
  var source = $('#users-template').html();
  var template = Handlebars.compile(source);
  var context = {users: usersArray};
  var usersElement = template(context);
  return usersElement;
}

//Render UsersAndView

//create a hearsay
function createHearsay(hearsayData, callback){
  callback = callback || function(){}
  $.ajax({
    method: 'post',
    data: {hearsay: hearsayData},
    url: '/api/hearsays',
    success: function(data){
      var hearsay = data.hearsay;
      callback(hearsay);
    }
  });
}

//get all hearsays


//Don't forget to all all of those function after doc ready...
