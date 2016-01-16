console.log('...loaded');

// ~~~~~~~~~~~~~~~~~~~~ BEAHVIORS ~~~~~~~~~~~~~~~~~~~~ //
// 1. getAllUsers
// 2. getAllHearsays
// 3. createUser
// 4. createHearsay
// 5. createComment
// 6. renderUsers
// 7. renderHearsay
// 8. renderHearsayList
// 9. renderCommentForm
// 10. renderComment
// 11. updateUser
// 12. updateUsersAndView
// 13. updateHearsaysAndViews
// 14. setUpdateUserFormHandler
// 15. setCreateUserFormHandler
// 16. setHearsayFormHandler
// 17. setCommentFormHandler
// 18. logInUser
// 19. setLogInFormHandler
// 20. setLogOutHandler

// ~~~~~~~~~~~~~~~~~~~~ GET ALL ~~~~~~~~~~~~~~~~~~~~ //
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

// Get all Hearsays
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

// ~~~~~~~~~~~~~~~~~~~~ CREATE ~~~~~~~~~~~~~~~~~~~~ //
// Send a request to create a User
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

// Send a request to create a Hearsay
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

// Send a request to create a Comment
function createComment(hearsayID, commentBody, callback){
  callback = callback || function(){};
  $.ajax({
    url: '/api/hearsays/' + hearsayID + '/comments',
    method: 'post',
    data: {comment: commentBody},
    success: function(data){
      var comment = data.comment;
      callback(comment);
    }
  });
}

// ~~~~~~~~~~~~~~~~~~~~ RENDER ~~~~~~~~~~~~~~~~~~~~ //
// Render Users
function renderUsers(usersArray){
  var source = $('#users-template').html();
  var template = Handlebars.compile(source);
  var context = {users: usersArray};
  var usersElement = template(context);
  return usersElement;
}

// Render Hearsays
function renderHearsay(hearsay){
  var $el = $('<div>').addClass('hearsay content-block');
  $el.append( $('<h2>').addClass('username').text(hearsay.username) ); //again, this will go away but is left in for testing purposes
  $el.append( $('<p>').addClass('body').text(hearsay.body) );

  var $commentList = $('<section>').addClass('comment-list');
  for (var i = 0; i < hearsay.comment.length; i++) {
    comment = hearsay.comment[i];
    $commentList.append( renderComment(comment) );
  }

  var $commentForm = renderCommentForm(hearsay);

  $commentList.append( $commentForm );

  $el.append( $commentList );

  return $el;
}

// Render Hearsay list
function renderHearsayList(hearsays, $list){
  $list.empty();
  var hearsay;
  for(var i = 0; i < hearsays.length; i++) {
    hearsay = hearsays[i];
    $hearsayView = renderHearsay(hearsay);
    $list.prepend($hearsayView);  // Prepend to post newest post on top
    // But if you comment on an older post, that post will move to the top
    // We should figure out how to fix this so that the newest post will remain at top
  }
}

// Render the Comment Form
function renderCommentForm(hearsay){
  var $commentForm = $('<form>').addClass('comment-generator');
  $commentForm.append( $('<input type="hidden" name="hearsay-id">').val(hearsay._id) );
  // $commentForm.append( $('<input type="text" name="username">') );
  $commentForm.append( $('<input type="text" name="body" placeholder="comment">') );
  $commentForm.append( $('<input type="submit">') );
  return $commentForm;
}

// Render Comments
function renderComment(comment){
  var $el = $('<div>').addClass('comment');
  $el.append( $('<h4>').addClass('username').text(comment.username) ); //this will go away eventually, but is left in right now for testing purposes
  $el.append( $('<p>').addClass('comment-body').text(comment.body) );
  return $el;
}

// ~~~~~~~~~~~~~~~~~~~~ UPDATE ~~~~~~~~~~~~~~~~~~~~ //
// Send request to update a User
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

//Render Users And View
function updateUsersAndView(){
  getAllUsers(function(users){
    $('section#users').empty();
    var usersElement = renderUsers(users);
    $('section#users').append(usersElement);
  });

  if($.cookie('token')){
    $('.user-only').show();
  } else {
    $('.user-only').hide();
  }
}

// Update Hearsays and the view section for users
function updateHearsaysAndViews(){
  getAllHearsays(function(hearsays){
    console.log(hearsays);
    var $list = $('#hearsay-list');
    renderHearsayList(hearsays, $list);
  });
}

// ~~~~~~~~~~~~~~~~~~~~ SET FORMS ~~~~~~~~~~~~~~~~~~~~ //
// Acquire input values from the form to update the user's password
function setUpdateUserFormHandler(){
  $('form#update-password').on('submit', function(e){
    e.preventDefault();

    var passwordField = $(this).find('input[name="password"]');
    var passwordText = passwordField.val();
    passwordField.val('');

    var userData = {password: passwordText};

    updateUser(userData, function(user){
      console.log(user);
      updateUsersAndView();
    });

  });
}

// Acquire input values from the create user form and create a user based on those values
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

// Acquire input data from the Hearsay form and create a hearsay using the acquired data
function setHearsayFormHandler(){
  $('form#hearsay-generator').on('submit', function(e){
    e.preventDefault();
    var formUsername = $(this).find('input[name="username"]').val(); //to be taken out later, testing purposes etc..
    var $formElement = $(this).find('textarea[name="body"]');
    var formBody = $formElement.val();
    var hearsayData = {body:formBody};
    createHearsay(hearsayData, function(hearsay){
      updateHearsaysAndViews();
    });
    $formElement.val('');
  });
}

// Acquire input data from the comment form and create a comment using the acquired data
function setCommentFormHandler(){
  $('body').on('submit', 'form.comment-generator', function(e){
    e.preventDefault();

    var hearsayID = $(this).find('input[name="hearsay-id"]').val();
    var formUsername = $(this).find('input[name="username"]').val(); //again to be taken out later, testing etc...
    var formBody = $(this).find('input[name="body"]').val();
    var commentData = {body:formBody};
    console.log(commentData);
    createComment(hearsayID, commentData, function(comment){
      updateHearsaysAndViews();
    });
  });
}

// ~~~~~~~~~~~~~~~~~~~~ LOGIN / LOGOUT ~~~~~~~~~~~~~~~~~~~~ //
// Send a request to LogIn
function logInUser(usernameAttempt, passwordAttempt, callback) {
  $.ajax({
    method: 'post',
    url: '/api/users/authenticate',
    data: {username: usernameAttempt, password: passwordAttempt},
    success: function(data){
      $.cookie('token', data.token);
      callback(data);
    }
  });
}

// Acquire input data from login form and see if it matches in the database. If it does, then give the user a cookie with a token
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
      $('#user-manager').hide();
      $('#hearsay-generator').show();
      console.log('Token:', $.cookie('token') );
      updateHearsaysAndViews();
    });
  });
}

// Logout user form
function setLogOutHandler(){
  $('form#log-out').on('submit', function(e){
    e.preventDefault();
    $.removeCookie('token');
    updateHearsaysAndViews();
    location.reload();
  });
};


// ~~~~~~~~~~~~~~~~~~~~ DOCUMENT READY FUNCTION ~~~~~~~~~~~~~~~~~~~~ //


$(function(){

  if($.cookie('token')){
    $('#hearsay-generator').show();
    $('#users-template').show();
    $('form#log-in').hide();
    $('#user-manager').hide();
    setHearsayFormHandler();
    setCommentFormHandler();
    setLogOutHandler();
    updateHearsaysAndViews();
  } else {
    $('.update-password').hide();
    $('form#log-in').show();
    $('button#log-out').hide();
    $('#hearsay-generator').hide();
    $('#users-template').hide();
    $('form#log-out').hide();
    setLogInFormHandler();
  }

  $('input#search-field').on('keyup', function(){
    var searchText = $(this).val();
      $.ajax({
      url: '/api/hearsays?search=' + searchText,
      success: function(data){
        console.log(data);
        var hearsays = data.hearsays;
        var $list = $('#hearsay-list');
        renderHearsayList(hearsays, $list);
      }
    });
  });


});
