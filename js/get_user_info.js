 (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
        window.onload = function() {
            FB.init({
              appId      : '2071863259521857',
              cookie     : true,  // enable cookies to allow the server to access 
              status     :true,  // the session
              xfbml      : true,  // parse social plugins on this page
              version    : 'v2.12' // use graph api version 2.8
            });
           
    FB.getLoginStatus(function(response) {
      if(response.status==="connected")
         {console.log("okay");
         user_id = response.authResponse.userID;
         document.getElementById("playerIcon").src = "https://graph.facebook.com/"+user_id+"/picture?type=large"; 
    }
      else
         console.log("nope");
    });  
            };