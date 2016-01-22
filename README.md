# Project3
We're now working on the darkness branch!

Hey this is Igor


testing

<!--
createUser
setCreateUserFormHandler
updateUser
setUpdateUserFormHandler
logInUser
setLogInFormHandler
getAllUsers
renderUsers
updateUsersAndView
 -->

Possible features:

I. Easy-to-implement features (maybe)

1)  Edit for comments:  I believe that users should be able to edit comments if not the posts...
I have never implemented this into an express app but I think the code might look something like this:
In routes:

<!--
router.edit('/:id/comments', function(req, res){
  var commentBody = req.body.comment;
  commentBody.username = req.user.username; //
  var hearsayID = req.params.id;
  Hearsay.findById(hearsayID, function(err, databaseHearsay){
    databaseHearsay.save(function(err){
    ...
    });
  });
}); -->

2) I did some research on the likes button and this seems promising (I don't think I down vote makes such sense...):  

a) Custom Facebook button:
<!--
<div class="fb-like" id="fb" data-href="www.yourdomain.com" data-send="false" data-layout="button_count" data-width="60" data-show-faces="true"></div>
-->
b) We require this JavaScript SDK from facebook to make the button function:
<!-- <div id="fb-root"></div>
<script>    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));
</script> -->
c) Below everying else:
<!-- <script type="text/javascript">
var sUrl = window.location;
document.getElementById('fb').setAttribute('href', sUrl);
</script> -->

Obviously this is an example where you dump all of this in the .ejs which we might not want to do...but it's something to start with.  Perhaps we can iterate this button over each comment...

3)  I think we should find some kind of exteral API to consume without adding something overly complicated but still would add to the functionality of our site.  I was thinking of a newsfeed API where users can click on a news link from our website.

This is a cool website that makes many api's easier to consume by making the documentation for accessable https://market.mashape.com/drano/newsinapp-io I liked this app in particular since it allows us to show news feeds by typics that might fit the theme of our website.  
I can reashing this one in particular or any others if you guys are on board with this idea.

I am not sure if we want to add more to this list since we have three days left until projects are do and we seem to be at a point where we have a pretty robust app.  What else would you guys like to see?
