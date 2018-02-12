
var username;
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit=function () {
  FB.init({
    appId: '2071863259521857',
    cookie: true,  // enable cookies to allow the server to access 
    status: true,  // the session
    xfbml: true,  // parse social plugins on this page
    version: 'v2.12' // use graph api version 2.8
  });
  var user_id;
  var access_token;
  

  FB.getLoginStatus(function (response) {
    if (response.status === "connected") {
      user_id = response.authResponse.userID;
     
      access_token = response.authResponse.accessToken; //get access token
      //console.log(username);
      var image = document.getElementById("playerIcon");
      var img = new Image();
      img.onload = function () {
        image.src = this.src;
      };
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.toString() === "guest=")
        img.src = "images/invader4_blue.png";
      else
        img.src = "https://graph.facebook.com/" + user_id + "/picture?type=large";
    }
    //else
    //console.log("nope");
    FB.api('/'+user_id, {access_token : access_token}, function(response) {
      username=response.name;
      use_name();
  });
  });
  
};
function use_name(){
  console.log(username);
//   var txtFile = "highscores.txt";
//   var file = new File([],txtFile);
//   var str = "My string of text";

// file.open("w"); // open file with write access
// file.writeln(username);
// file.writeln("Second line of text " + str);
// file.write(str);
// file.close();

}


