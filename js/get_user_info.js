(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.onload = function () {
  FB.init({
    appId: '2071863259521857',
    cookie: true,  // enable cookies to allow the server to access 
    status: true,  // the session
    xfbml: true,  // parse social plugins on this page
    version: 'v2.12' // use graph api version 2.8
  });

  FB.getLoginStatus(function (response) {
    if (response.status === "connected") {//console.log("okay");
      user_id = response.authResponse.userID;
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
  });
};

