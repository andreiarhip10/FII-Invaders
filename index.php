<!DOCTYPE html>
<html>
    <head>
            <link rel="stylesheet" type="text/css" href="css/index-style_updated.css">
            <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"> 
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet">
            <script src="js/dropdown.js"></script>
            <script src="js/move_alien.js"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <?php 
	session_start();
	$accessToken = isset($_SESSION['accessToken']) ? $_SESSION['accessToken'] : NULL;
	//echo $fbToken;
	$playerIcon = isset($_SESSION['playerIcon']) ? $_SESSION['playerIcon'] : NULL;
	$userName = isset($_SESSION['userName']) ? $_SESSION['userName'] : NULL;
	//echo $playerIcon;?>
    </head>

    <body>
        <div class="navbar">FII Invaders
            <img id="alien" src="images/for_navbar.png" onclick="move('alien','navbar')"></div>
        
        <div class="container">
        <div class="col1">

            <img class="invader1" src=""images/invader1_blue.png">
                
            <div class="sidebar">
                   
                <div class="menu"><img class="title" src="<?php echo $playerIcon?>" id="playerIcon"></div>
                    <ul class="sidebar-links">
                        
                            <a class="sidebar-link rule" href="#" onclick="showElement(this, 'rules','controls')" value="show">
                                <li class="rules hvr-bob">Rules</li>
                            </a>
                            
                            
                            
                            <a class="sidebar-link" href="#" onclick="showElement(this, 'controls','rules')" value="show">
                                <li class="controls hvr-bob">Controls</li>
                            </a>
                        
                            
                            <a class="sidebar-link" href="description.html"><li class="desc hvr-bob">Description</li></a>
                            <a class="sidebar-link" href="#popup1">
                            <li class="highscores hvr-bob">Highscores</li></a>                            
                            <div id="rules">
                                    - stay alive by avoiding enemy projectiles
                                    <br><br>
                                    - kill all enemies before they reach you
                                    <br><br>
                                    - kill special enemies for bonus score
                                </div> 
                            <div id="controls">
                                    <i class="left"></i> &nbsp;&nbsp;&nbsp;&nbsp;- move left
                                    <br><br>
                                    <i class=right></i> &nbsp;&nbsp;&nbsp;&nbsp;- move right
                                    <br><br>
                                    SPACE - fire
                                    <br><br>
                                    P &nbsp;&nbsp;&nbsp;&nbsp;- pause game
                            </div>  
                            <div id="popup1" class="overlay col1">
                            <div class="popup">
                            <h2>HighScores</h2>
                            <a class="close" href="#">&times;</a>
                            <div class="content">                               
                               1. First Player -- infinite<br/>
                               2. Second Player -- below infinite<br/>
                               3. Third Player --- 99999999<br/>
                            </div>
                            </div>
                            </div>                                  
                    </ul>
                    
            </div>
 </div>

        <div class="col2">
                
            <img class="invader2" src="images/invader1_blue.png">
            <div class="canvasContainer"><canvas id="my-canvas">
            </canvas>
            <script>            
            var canvas = document.getElementById("my-canvas");
            var ctx = canvas.getContext('2d');
            function make_bug()
            {
              bug = new Image();
              bug.src = "images/invader1_white.png";
              bug.onload = function(){
                ctx.drawImage(bug, 30, 80);
              }
            }
            ctx.font = "16px 'Press Start 2P'";
            ctx.fillStyle = "white";
            ctx.shadowBlur=20;
            ctx.shadowColor="#538CC6";            
            ctx.fillText("*INSERT GAME HERE*",8,75);        
            </script>
            </div>
        </div>
    </div>
    </body>