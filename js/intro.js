window.onload = function(){
    var canvas = document.getElementById("intro-canvas");
    
var ctx = canvas.getContext('2d');
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');

// var canvasInfo = canvas.getBoundingClientRect();
//                 console.log(canvasInfo.height);
//                 console.log(canvasInfo.width);
var buraga = new Image();
var varlan = new Image();
var iftene = new Image();


var buttonX = [30,125,220,160];
var buttonY = [65,65,66,70];
var buttonWidth = [96,260,182,160];
var buttonHeight = [40,40,40,40];


buraga.onload=function(){
    ctx.drawImage(buraga, buttonX[0], buttonY[0],54,55);  
}
    
varlan.onload=function(){
    ctx.drawImage(varlan, buttonX[1], buttonY[1],53,53);
}
iftene.onload=function(){
    ctx.drawImage(iftene, buttonX[2], buttonY[2],52,52);
}


buraga.src = "images/buraga.png";
varlan.src = "images/varlan.png";
iftene.src = "images/iftene.png";

ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 2;
ctx.shadowColor = "#57575c";
ctx.shadowBlur = 3;
ctx.font = "16px 'Press Start 2P'";
ctx.fillStyle = "white";
ctx.fillText("Choose a prof :",35,45); 
ctx.font = "8px 'Press Start 2P'";           
ctx.fillText("Busaco",35,132); 
ctx.fillText("Varlan",128,132); 
ctx.fillText("Iftene",223,132); 
ctx.fillStyle = "white";
ctx.shadowBlur=3;
//ctx.shadowColor="white";

canvas.addEventListener('click', function() { 
    var cnv=document.getElementById("my-canvas");
    
    canvas.style.display="none";
    cnv.style.display="block";
    initiateCanvas();
    
}, false);
}