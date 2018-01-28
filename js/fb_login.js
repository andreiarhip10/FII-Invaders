function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
    } else {
      //document.getElementById('status').innerHTML = 'Please log ' +
        //'into this app.';   
    }
  }
  
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      if(response.status==="connected"){
          access_token = response.authResponse.accessToken;
      window.location.replace("index_updated.html");}
      else
      login();
      //smt();
      statusChangeCallback(response);
    });
  }
  
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '2071863259521857',
    cookie     : true,  // enable cookies to allow the server to access 
    status     :true,  // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.11' // use graph api version 2.8
  });
  
  FB.getLoginStatus(function(response) {
   
    statusChangeCallback(response);
  });
  
  };
  
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  
  function login() {
    status=
    FB.login(function(response) {
  
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       access_token = response.authResponse.accessToken; //get access token
       user_id = response.authResponse.userID; //get FB UID
       console.log(access_token);
       user_email = response.email;
       console.log(user_id); 
     
      FB.api('/me', function(response) {
          //window.location.replace("login_flow.php?access_token="+access_token);
          window.location.replace("index_updated.html");
          console.log('Good to see you, ' + response.name + '.');
  
        });  
  
     } else {
    console.log('User cancelled login or did not fully authorize.');
  }
  }, {
  scope: 'public_profile', auth_type: 'reauthenticate'
  });
  }
  
  function logout()
  {
    FB.logout(function(response) {
      console.log('Bye, ' + response.name + '.');
  });
  }
  