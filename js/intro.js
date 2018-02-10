window.onload = function () {
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


    var posX = [30, 125, 220];
    var posY = [65, 65, 66];

    buraga.onload = function () {
        ctx.drawImage(buraga, posX[0], posY[0], 54, 55);
    }

    varlan.onload = function () {

        ctx.drawImage(varlan, posX[1], posY[1], 53, 53);
    }

    iftene.onload = function () {
        ctx.drawImage(iftene, posX[2], posY[2], 52, 52);
    }


    buraga.src = "images/buraga.png";
    varlan.src = "images/varlan.png";
    iftene.src = "images/iftene.png";

    function draw() {
        ctx.drawImage(buraga, posX[0], posY[0], 54, 55);
        ctx.drawImage(varlan, posX[1], posY[1], 53, 53);
        ctx.drawImage(iftene, posX[2], posY[2], 52, 52);
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 2;
        ctx.shadowColor = "#57575c";
        ctx.shadowBlur = 3;
        ctx.font = "16px 'Press Start 2P'";
        ctx.fillStyle = "white";
        ctx.fillText("Choose a prof :", 35, 45);
        ctx.font = "8px 'Press Start 2P'";
        ctx.fillText("Busaco", 35, 132);
        ctx.fillText("Varlan", 128, 132);
        ctx.fillText("Iftene", 223, 132);
        
    }
    draw();
 
    canvas.addEventListener('click', function () {
        var cnv = document.getElementById("my-canvas");

        canvas.style.display = "none";
        cnv.style.display = "block";
        initiateCanvas();

    }, false);
    canvas.addEventListener("mousemove", handleMouseMove);
    function reOffset() {
        var BB = canvas.getBoundingClientRect();
        offsetX = BB.left;
        offsetY = BB.top;
    }
    var offsetX, offsetY;
    reOffset();
    window.onscroll = function (e) { reOffset(); }
    window.onresize = function (e) { reOffset(); }

    var isDown = false;
    var startX, startY;


    var ex = 0;
    function handleMouseMove(e) {
        
        e.preventDefault();
        e.stopPropagation();
        var hover = false;
        var hover_b = false;
        var hover_v = false;
        var hover_i = false;

        mx = parseInt(e.clientX - offsetX);
        my = parseInt(e.clientY - offsetY);
        console.log(mx, my);
        if(my>200 &&my<410)
        if (mx > 100 && mx < 255) 
            {
            hover_b = true;
            hover=true;}
        else if(mx>380 &&mx<545)
        {
            hover_v = true;
            hover=true;}
        else if(mx>685&&mx<845){
            hover_i = true;
            hover=true;}
        

        if (hover && ex != 2) {
            ex = 1;
            if (ex == 1) {
                ctx.clearRect(0, 0, 300, 300);
                draw();
                ctx.fillStyle = "white";
                ctx.shadowBlur = 12;
                ctx.shadowColor = "white";
                if (hover_b)
                    ctx.drawImage(buraga, posX[0], posY[0], 54, 55);
                if(hover_v)
                    ctx.drawImage(varlan, posX[1], posY[1], 53, 53);
                if(hover_i)
                    ctx.drawImage(iftene, posX[2], posY[2], 52, 52);

                ex = 2;
            }
        }

        else if (!hover) {
            ctx.clearRect(0, 0, 300, 300);
            ctx.shadowColor = "#57575c";
            ctx.shadowBlur = 3;
            ex = 1;
            draw();
        }

    }
}

