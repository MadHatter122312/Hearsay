//  Create User Form handler


// // Get all Users
// function getAllUsers(callback){
//   callback = callback || function(){};
//   $.ajax({
//     url: '/api/users',
//     success: function(data){
//       var users = data.users || [];
//       callback(users);
//     }
//   })
// }
// // Render Users
// function renderUsers(usersArray){
//   var source = $('#users-template').html();
//   var template = Handlebars.compile(source);
//   var context = {users: usersArray};
//   var usersElement = template(context);
//   return usersElement;
// }
