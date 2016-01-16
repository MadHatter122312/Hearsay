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

function setCreateUserFormHandler(){
  $('form#sign-up').on('submit', function(e){
    e.preventDefault();

    // Obtain the username from form
    var usernameField = $(this).find('input[name="username"]');
    var usernameText = usernameField.val();
    usernameField.val('');

    // Obtain the password from form
    var passwordField = $(this).find('input[name="password"]');
    var passwordText = passwordField.val();
    passwordField.val('');

    // Organize the data to be sent
    var userData = {username: usernameText, password: passwordText};
    console.log('userdata', userData);

    // Create a new user
    createUser(userData, function(user){
      console.log(user);
      updateHearsaysAndViews(); // Update the entire view
    });

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


//started here

function createComment(hearsayID, commentBody, callback){
  callback = callback || function(){};
  $.ajax({
    url: '/api/hearsays/' + hearsayID + '/comment',
    method: 'post',
    data: {comment: commentBody},
    success: function(data){
      var comment = data.comment;
      callback(comment);
    }
  });
}

//get all hearsays
function getAllHearsays(callback){
  callback = callback || function(){};
  $.ajax({
    url: '/api/hearsays',
    success: function(data){
      var hearsays = data.hearsays || [];
      callback(hearsays);
    }
  });
}

function renderCommentForm(hearsay){
  var $commentForm = $('<form>').addClass('comment-generator');
  $commentForm.append( $('<input type="hidden" name="hearsay-id">').val(hearsay._id) );
  // $commentForm.append( $('<input type="text" name="username">') );
  $commentForm.append( $('<input type="text" name="body">') );
  $commentForm.append( $('<input type="submit">') );
  return $commentForm;
}

function renderComment(comment){
  var $el = $('<div>').addClass('comment');
  // $el.append( $('<h4>').addClass('username').text(comment.username) ); //this will go away eventually, but is left in right now for testing purposes
  $el.append( $('<p>').addClass('comment-body').text(comment.body) );
  return $el;
}

function renderHearsay(hearsay){
  var $el = $('<div>').addClass('hearsay content-block');
  $el.append( $('<h2>').addClass('username').text(hearsay.username) ); //again, this will go away but is left in for testing purposes
  $el.append( $('<p>').addClass('body').text(hearsay.body) );

  var $commentList = $('<section>').addClass('comment-list');
  for (var i = 0; i < hearsay.comment.length; i++) {
    comment = hearsay.comments[i];
    $commentList.append( renderComment(comment) );
  }

  var $commentForm = renderCommentForm(hearsay);
  $commentList.append( $commentForm );

  $el.append( $commentList );

  return $el;
}

function renderHearsayList(hearsays, $list){
  $list.empty();
  var hearsay;
  for (var i = 0; i < hearsays.length; i++) {
    hearsay = hearsays[i];
    $hearsayView = renderHearsay(hearsay);
    $list.append($hearsayView);
  }
}

function updateHearsaysAndViews(){
  getAllHearsays(function(hearsays){
    var $list = $('#hearsay-list');
    renderHearsayList(hearsays, $list);
  });
  getAllUsers(function(users){
    $('section#users').empty();
    var usersElement = renderUsers(users);
    $('section#users').append(usersElement);
  });
   if($.cookie('token')){
    $('#hearsay-list').show();
    $('#new-hearsay').show();
    // $('#users-template').show();
    } else {
      $('#hearsay-list').hide();
      $('#new-hearsay').hide();
      // $('#users-template').hide();
    }
  }

function setHearsayFormHandler(){
  $('form#new-hearsay').on('submit', function(e){
    e.preventDefault();
    var formUsername = $(this).find('input[name="username"]').val(); //to be taken out later, testing purposes etc..
    var formBody = $(this).find('textarea[name="body"]').val();
    var hearsayData = {body:formBody};
    createHearsay(hearsayData, function(hearsay){
      updateHearsaysAndViews();
    });
  });
}

function setCommentFormHandler(){
  $('body').on('submit', 'form.comment-generator', function(e){
    e.preventDefault();
    var hearsayID = $(this).find('input[name="hearsay-id"]').val();
    var formUsername = $(this).find('input[name="username"]').val(); //again to be taken out later, testing etc...
    var formBody = $(this).find('input=[name="body"]').val();
    var commentData = {body:formBody, username:formUsername};
    console.log(commentData);
    createComment(hearsayID, commentData, function(comment){
      updateHearsaysAndViews();
    });
  });
}

function setLogInFormHandler(){
  $('form#log-in').on('submit', function(e){
    e.preventDefault();

    var usernameField = $(this).find('input[name="username"]');
    var usernameAttempt = usernameField.val();
    usernameField.val('');

    var passwordField = $(this).find('input[name="password"]');
    var passwordAttempt = passwordField.val();
    passwordField.val('');

    var userData = {username: usernameAttempt, password: passwordAttempt};

    logInUser(usernameAttempt, passwordAttempt, function(data){

      $.cookie('token', data.token);

      console.log('Token:', $.cookie('token') );
      updateHearsaysAndViews();
    });
  });
}

function setLogOutHandler(){
  $('form#log-out').on('submit', function(e){
    e.preventDefault();
    $.removeCookie('token');
    updateHearsaysAndViews();
  });
};

$(function(){
  setCommentFormHandler();
  setHearsayFormHandler();
  updateHearsaysAndViews();
  setLogInFormHandler();
  setLogOutHandler();

  $('input#search-field').on('keyup', function(){
    var searchText = $(this).val();
    $.ajax({
    url: '/api/hearsays?search=' + searchText,
    success: function(data){
      var hearsays = data.hearsays;
      var $list = $('#hearsay-list');
      renderHearsayList(hearsays, $list);
      }
    });
  });

});
//Don't forget to all all of those function after doc ready...
