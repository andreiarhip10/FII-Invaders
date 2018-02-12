// window.onload = function () {
    function outro(){
    var canvas = document.getElementById("end-canvas");
    var cnv = document.getElementById("intro-canvas");
    cnv.style.display = "none";
    canvas.style.display = "block";
    var ctx = canvas.getContext('2d');
    var width = canvas.getAttribute('width');
    var height = canvas.getAttribute('height');



    var posX = [30, 125, 220];
    var posY = [65, 65, 66];


    function draw() {
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 2;
        ctx.shadowColor = "#57575c";
        ctx.shadowBlur = 3;
        ctx.font = "16px 'Press Start 2P'";
        ctx.fillStyle = "white";
        ctx.fillText("GAME OVER", 75, 55);
        ctx.font = "8px 'Press Start 2P'";
        ctx.fillText("Play again", 75, 85);
        ctx.fillText("Change character", 75, 105);

    }
    draw();

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

    var is_hovered = true;
    var hover_ok = false;
    var play_again = false;
    var change_ch = false;
    var click = true;
    var intro=false;
    var game=true;

    function checkHover(e) {
        e.preventDefault();
        e.stopPropagation();
        hover_ok = false;
        play_again = false;
        change_ch = false;
        

        mx = parseInt(e.clientX - offsetX);
        my = parseInt(e.clientY - offsetY);

        const bounds = canvas.getBoundingClientRect();
        mx = (mx / bounds.width) * canvas.width;
        my = (my / bounds.height) * canvas.height;
        console.log(mx, my);
        if (mx > 60 && mx < 220)
            if (my > 73 && my < 86) {
                play_again = true;
                hover_ok = true;
                game=true;
            }
            else if (my > 93 && my < 105) {
                change_ch = true;
                hover_ok = true;
                intro=true;
            }
            else{
                game=false;
                intro=false;
            }

        // if (ready) {
        //     if (my > 25 && my < 45)
        //         if (mx > 0 && mx < 300) {
        //             can_start = true;
        //         }
        // }
    }

    function handleMouseMove(e) {

        checkHover(e);


        if (hover_ok && is_hovered == true && click) {

            ctx.clearRect(0, 0, 300, 300);
            //draw();

            if (play_again) {
                ctx.font = "16px 'Press Start 2P'";
                ctx.fillText("GAME OVER", 75, 55);
                ctx.font = "8px 'Press Start 2P'";
                ctx.fillText("> Play again", 59, 85);
                ctx.fillText("Change character", 75, 105);
            }


            if (change_ch){
                ctx.font = "16px 'Press Start 2P'";
                ctx.fillText("GAME OVER", 75, 55);
                ctx.font = "8px 'Press Start 2P'";
                ctx.fillText("Play again", 75, 85);
                ctx.fillText("> Change character", 59, 105);
            }

            is_hovered = false;

            //console.log("de la move")

        }

        else if (!hover_ok && is_hovered == false && click) {
            ctx.clearRect(0, 0, 300, 300);

            is_hovered = true;
            draw();
            // console.log("de la else pe move")
        }

    }



    function handleMouseClick(e) {

        checkHover(e);
        if (intro==true) {

            // var cnv = document.getElementById("intro-canvas");
            var canvas = document.getElementById("end-canvas");
            // ctx.clearRect(0, 0, 300, 300);
            var cnv = document.createElement('canvas'),
            newContext = canvas.getContext('2d');
        // Insert the new canvas after the old one
        canvas.parentNode.insertBefore(cnv, canvas.nextSibling);
        // Remove old canvas. Now the new canvas has its position.
        canvas.parentNode.removeChild(canvas);
        cnv.id="end-canvas";
            //canvas.style.display="none";
            //canvas=null;  
            cnv.style.display = "none";
            var cenv = document.getElementById("intro-canvas");
            cenv.style.display = "block";
            introCanvas();
        }
        else if (game==true){
            var canvas = document.getElementById("end-canvas");
            // ctx.clearRect(0, 0, 300, 300);
            var cnv = document.createElement('canvas'),
            newContext = canvas.getContext('2d');
        // Insert the new canvas after the old one
        canvas.parentNode.insertBefore(cnv, canvas.nextSibling);
        // Remove old canvas. Now the new canvas has its position.
        canvas.parentNode.removeChild(canvas);
        cnv.id="end-canvas";
            //canvas.style.display="none";
            //canvas=null;  
            cnv.style.display = "none";
            var cenv = document.getElementById("my-canvas");
            cenv.style.display = "block";
            initiateCanvas();
        }

        // if (hover_ok) {
        //     is_hovered = true;
        //     if (is_hovered == true) {
        //         ctx.clearRect(0, 0, 300, 300);
        //         ctx.shadowColor = "#57575c";
        //         ctx.shadowBlur = 3;
        //         draw();
        //         ctx.fillStyle = "white";
        //         ctx.shadowBlur = 12;
        //         ctx.shadowColor = "white";
        //         if (play_again)
        //             ctx.drawImage(buraga, posX[0], posY[0], 54, 55);
        //         if (change_ch)
        //             ctx.drawImage(varlan, posX[1], posY[1], 53, 53);
        //         if (hover_i)
        //             ctx.drawImage(iftene, posX[2], posY[2], 52, 52);

        //         click = false;
        //         is_hovered = true;
        //         ctx.shadowOffsetX = 1;
        //         ctx.shadowOffsetY = 2;
        //         ctx.shadowColor = "#57575c";
        //         ctx.shadowBlur = 3;
        //         ctx.font = "16px 'Press Start 2P'";
        //         ctx.clearRect(0, 0, 300, 50);
        //         ctx.fillText("> Click to start", 20, 45);
        //         ready = true;



        //     }
        // }

        // else {
        //     ctx.clearRect(0, 0, 300, 300);
        //     ctx.shadowColor = "#57575c";
        //     ctx.shadowBlur = 3;
        //     is_hovered = true;
        //     draw();
        //     click = true;
        //     ready = false;

        // }

    }
}
