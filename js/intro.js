window.onload = introCanvas ();
function introCanvas() {
    var canvas = document.getElementById("intro-canvas");
    canvas.style.display = "block";

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

    // canvas.addEventListener('click', function () {
    //     var cnv = document.getElementById("my-canvas");

    //     canvas.style.display = "none";
    //     cnv.style.display = "block";
    //     initiateCanvas();

    // }, false);

    canvas.addEventListener("click", handleMouseClick);
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

    var hovered = true;
    var hover = false;
    var hover_b = false;
    var hover_v = false;
    var hover_i = false;
    var clicked = true;
    var ready = false;
    var can_start = false;

    function checkHover(e) {
        e.preventDefault();
        e.stopPropagation();
        hover = false;
        hover_b = false;
        hover_v = false;
        hover_i = false;

        mx = parseInt(e.clientX - offsetX);
        my = parseInt(e.clientY - offsetY);

        const bounds = canvas.getBoundingClientRect();
        mx = (mx / bounds.width) * canvas.width;
        my = (my / bounds.height) * canvas.height;
        console.log(mx, my);
        if (my > 65 && my < 135)
            if (mx > 30 && mx < 85) {
                hover_b = true;
                hover = true;
            }
            else if (mx > 125 && mx < 175) {
                hover_v = true;
                hover = true;
            }
            else if (mx > 220 && mx < 270) {
                hover_i = true;
                hover = true;
            }

        if (ready) {
            if (my > 25 && my < 45)
                if (mx > 0 && mx < 300) {
                    can_start = true;
                }
                else can_start=false;
        }
    }

    function handleMouseMove(e) {

        checkHover(e);


        if (hover && hovered == true && clicked) {

            ctx.clearRect(0, 0, 300, 300);
            draw();
            ctx.fillStyle = "white";
            ctx.shadowBlur = 12;
            ctx.shadowColor = "white";
            if (hover_b)
                ctx.drawImage(buraga, posX[0], posY[0], 54, 55);
            if (hover_v)
                ctx.drawImage(varlan, posX[1], posY[1], 53, 53);
            if (hover_i)
                ctx.drawImage(iftene, posX[2], posY[2], 52, 52);

            hovered = false;

            //console.log("de la move")

        }

        else if (!hover && hovered == false && clicked) {
            ctx.clearRect(0, 0, 300, 300);
            ctx.shadowColor = "#57575c";
            ctx.shadowBlur = 3;
            hovered = true;
            draw();
            // console.log("de la else pe move")
        }

    }



    function handleMouseClick(e) {

        checkHover(e);
        if (can_start) {

            var cnv = document.getElementById("my-canvas");

            canvas.style.display = "none";
            cnv.style.display = "block";
            hovered=false;
            initiateCanvas();
        }

        if (hover) {
            hovered = true;
            if (hovered == true) {
                ctx.clearRect(0, 0, 300, 300);
                ctx.shadowColor = "#57575c";
                ctx.shadowBlur = 3;
                draw();
                ctx.fillStyle = "white";
                ctx.shadowBlur = 12;
                ctx.shadowColor = "white";
                if (hover_b)
                    ctx.drawImage(buraga, posX[0], posY[0], 54, 55);
                if (hover_v)
                    ctx.drawImage(varlan, posX[1], posY[1], 53, 53);
                if (hover_i)
                    ctx.drawImage(iftene, posX[2], posY[2], 52, 52);

                clicked = false;
                hovered = true;
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 2;
                ctx.shadowColor = "#57575c";
                ctx.shadowBlur = 3;
                ctx.font = "16px 'Press Start 2P'";
                ctx.clearRect(0, 0, 300, 50);
                ctx.fillText("> Click to start", 20, 45);
                ready = true;



            }
        }

        else {
            ctx.clearRect(0, 0, 300, 300);
            ctx.shadowColor = "#57575c";
            ctx.shadowBlur = 3;
            hovered = true;
            draw();
            clicked = true;
            ready = false;

        }

    }
}

