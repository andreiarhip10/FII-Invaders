// Canvas context
var ctx;
// List with containing users, used to check their coordinates, call their methods
var listOfStudents = [];
// List containing the front students - the ones that are able to fire
var frontStudents = [];
// Special student instance
var specialStudent;
// Teacher instance
var teacher;
// Score
var score;
// Variable that keeps count of previous bonus life score
var previousScore;
// List with desk instances
var deskBits = [];

// Variable that checks if GAME OVER
var gameOver;

// Variables for various intervals
var normalInterval;
var specialInterval;
var projectileInterval;
var teacherProjectileInterval;

// Variables used when chaning level
var justChanged;
var levelAdvance;

// Variable used for background color
var backgroundColor;


// Function for score cheking - used when awarding bonus life - ANIMATION FOR EXTRA LIFE

function checkScore() {
    if (score >= previousScore + 400) {
        eraseLives(teacher.lives);
        teacher.lives = teacher.lives + 1;
        drawLives(teacher.lives);
        console.log('Earned extra life.');
        previousScore = previousScore + 400;
    }
}

// Method for score area

function scoreArea() {
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 2;
    ctx.shadowColor = "#57575c";
    ctx.shadowBlur = 3;
    ctx.fillStyle = 'black';
    ctx.font = "8px 'Press Start 2P'";
    ctx.fillText('Score: ', 210, 11);
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
}

// Method for drawing score

function drawScore(score) {
    ctx.fillStyle = 'black';
    ctx.font = "8px 'Press Start 2P'";
    ctx.fillText(score, 260, 11);
}

function eraseScore(score) {
    ctx.fillStyle = '#f1f1f1';
    ctx.fillRect(258, 3, 35, 10);
}

// Methods for lives area

function livesArea() {
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 2;
    ctx.shadowColor = "#57575c";
    ctx.shadowBlur = 3;
    ctx.fillStyle = 'black';
    ctx.font = "8px 'Press Start 2P'";
    ctx.fillText('Lives: ', 5, 11);
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
}

function drawLives(lives) {
    // ctx.fillStyle = 'black';
    // for (var i = 0; i < lives; i++) {
    //     ctx.fillRect(55 + i * 10, 3, 7, 7);
    // }
    for (var i = 0; i < lives; i++) {
        ctx.fillStyle = 'red';
        ctx.fillRect(55 + i * 10, 4, 7, 3);
        ctx.fillRect(57 + i * 10, 7, 3, 1);
        ctx.fillRect(58 + i * 10, 8, 1, 1);
        ctx.fillStyle = '#f1f1f1';
        ctx.fillRect(58 + i * 10, 4, 1, 1)
    }
}

function eraseLives(lives) {
    ctx.fillStyle = '#f1f1f1';
    for (var i = 0; i < lives; i++) {
        ctx.fillRect(55 + i * 10, 3, 7, 7);
    }
}

// Method for drawing simple tables

function drawTables() {

    if (backgroundColor == '#a9c8fc') {
        ctx.strokeStyle = 'grey';
    } else if (backgroundColor == '#9A7B47') {
        ctx.strokeStyle = '#604736';
    }
    
    //Left side
    ctx.beginPath();
    ctx.moveTo(75, 37.5);
    ctx.lineTo(135, 37.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(60, 52.5);
    ctx.lineTo(135, 52.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(45, 67.5);
    ctx.lineTo(135, 67.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(45, 82.5);
    ctx.lineTo(135, 82.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(45, 97.5);
    ctx.lineTo(135, 97.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(60, 112.5);
    ctx.lineTo(135, 112.5);
    ctx.stroke();

    // Right side

    ctx.beginPath();
    ctx.moveTo(162, 37.5);
    ctx.lineTo(224.5, 37.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(162, 52.5);
    ctx.lineTo(239.5, 52.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(162, 67.5);
    ctx.lineTo(254.5, 67.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(162, 82.5);
    ctx.lineTo(254.5, 82.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(162, 97.5);
    ctx.lineTo(254.5, 97.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(162, 112.5);
    ctx.lineTo(239.5, 112.5);
    ctx.stroke();
}

// Method for drawing shield desk

function drawDesk() {
    for (var i = 0; i < 8; i++) {
        deskBits.push(new Desk(ctx, 110 + i * 10, 120, 5));
        deskBits[i].draw();
    }
}

// Method for drawing C2 amphitheatre

function drawC2() {

    backgroundColor = '#a9c8fc'

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(30, 10, 300, 200);

    ctx.strokeStyle = "#000";
    //background
    // ctx.fillStyle="#4682B4";
    ctx.fillStyle = "#f1f1f1";
    ctx.fillRect(0, 0, 29, 200);
    ctx.fillRect(29, 0, 300, 14);
    ctx.fillRect(271, 0, 30, 200);
    ctx.fillStyle = "#CFA76E";
    ctx.fillRect(26, 15, 4, 200);
    ctx.fillRect(271, 15, 3, 200);
    //draw walls
    ctx.lineWidth = 0.8;
    ctx.moveTo(20, 10);
    ctx.lineTo(30, 15);
    ctx.stroke();
    ctx.moveTo(270, 15);
    ctx.lineTo(278, 10);
    ctx.stroke();
    //door
    ctx.fillStyle = "brown";
    ctx.lineCap = "round";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.fillRect(137, 0, 11, 15);
    ctx.moveTo(148, 0);
    ctx.lineTo(148, 15);
    ctx.stroke();
    ctx.moveTo(146, 10);
    ctx.lineTo(148, 10);
    ctx.stroke();
    ctx.fillRect(148, 0, 10, 15);
    ctx.strokeRect(137, 0, 21, 15);
    ctx.closePath();
    //schedule
    ctx.fillStyle = "white";
    ctx.lineCap = "round";
    ctx.lineWidth = 1;
    ctx.fillRect(151, 3, 4, 4);
    ctx.strokeRect(151, 3, 5, 5);
    //windows-left
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(0, 30);
    ctx.lineTo(25, 45);
    ctx.lineTo(25, 55);
    ctx.lineTo(0, 40);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(12.5, 37.5);
    ctx.lineTo(12.5, 46.5);
    ctx.moveTo(0, 35);
    ctx.lineTo(25, 50);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(0, 90);
    ctx.lineTo(25, 105);
    ctx.lineTo(25, 115);
    ctx.lineTo(0, 100);
    ctx.closePath();
    ctx.fill();
    ctx.moveTo(12.5, 97.5);
    ctx.lineTo(12.5, 106.5);
    ctx.moveTo(0, 95);
    ctx.lineTo(25, 110);
    ctx.stroke();
    //windows-right
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 20);
    ctx.lineTo(275, 35);
    ctx.lineTo(275, 45);
    ctx.lineTo(300, 30);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 27.5);
    ctx.lineTo(287.5, 36.5);
    ctx.moveTo(300, 25);
    ctx.lineTo(275, 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 50);
    ctx.lineTo(275, 65);
    ctx.lineTo(275, 75);
    ctx.lineTo(300, 60);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 57.5);
    ctx.lineTo(287.5, 66.5);
    ctx.moveTo(300, 55);
    ctx.lineTo(275, 70);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 110);
    ctx.lineTo(275, 125);
    ctx.lineTo(275, 135);
    ctx.lineTo(300, 120);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 117.5);
    ctx.lineTo(287.5, 126.5);
    ctx.moveTo(300, 115);
    ctx.lineTo(275, 130);
    ctx.stroke();
    //cuier		
    ctx.beginPath();
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = "brown";
    ctx.lineCap = "round";
    ctx.moveTo(15, 65);
    ctx.lineTo(15, 85);
    ctx.lineTo(30, 95);
    ctx.lineTo(30, 75);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#CFA76E";
    ctx.fill();
    ctx.moveTo(20, 68);
    ctx.lineTo(20, 88);
    ctx.stroke();
    ctx.moveTo(18, 67);
    ctx.lineTo(18, 87);
    ctx.stroke();
    //secretdoor
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.8;
    ctx.lineCap = "round";
    ctx.moveTo(300, 70);
    ctx.lineTo(295, 80);
    ctx.lineTo(270, 95);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(290, 84);
    ctx.lineTo(290, 90);
    ctx.lineTo(275, 100);
    ctx.lineTo(275, 93);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.moveTo(283, 95);
    ctx.lineTo(283, 93);
    ctx.stroke();

    ctx.strokeStyle = '#cfa76e'
    ctx.moveTo(30, 15);
    ctx.lineTo(136, 15);
    ctx.stroke();

    ctx.moveTo(160, 15);
    ctx.lineTo(270, 15);
    ctx.stroke();
}

// Method for drawing C112

function drawC112() {

    backgroundColor = '#9A7B47';

    //caseta maro
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(30,15,240,200);
    ctx.fillStyle="#f1f1f1";
    ctx.fillRect(0, 0, 29, 200);
    ctx.fillRect(29, 0, 300, 14);
    ctx.fillRect(271, 0, 30, 200);
    ctx.beginPath();
    ctx.strokeStyle="#CFA76E";
    ctx.lineWidth=2;
    ctx.strokeRect(30.5,15.5,240,200);
    //draw walls
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth = 0.8;
    ctx.moveTo(20, 10);
    ctx.lineTo(30, 15);
    ctx.stroke();
    ctx.moveTo(270, 15);
    ctx.lineTo(278, 10);
    ctx.stroke();
    //windows-right
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 20);
    ctx.lineTo(275, 35);
    ctx.lineTo(275, 45);
    ctx.lineTo(300, 30);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 27.5);
    ctx.lineTo(287.5, 36.5);
    ctx.moveTo(300, 25);
    ctx.lineTo(275, 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 50);
    ctx.lineTo(275, 65);
    ctx.lineTo(275, 75);
    ctx.lineTo(300, 60);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 57.5);
    ctx.lineTo(287.5, 66.5);
    ctx.moveTo(300, 55);
    ctx.lineTo(275, 70);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 80);
    ctx.lineTo(275, 95);
    ctx.lineTo(275, 105);
    ctx.lineTo(300, 90);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 87.5);
    ctx.lineTo(287.5, 96.5);
    ctx.moveTo(300, 85);
    ctx.lineTo(275, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 110);
    ctx.lineTo(275, 125);
    ctx.lineTo(275, 135);
    ctx.lineTo(300, 120);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 117.5);
    ctx.lineTo(287.5, 126.5);
    ctx.moveTo(300, 115);
    ctx.lineTo(275, 130);
    ctx.stroke();
    //cuier
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle="brown";
    ctx.lineCap="round";
    ctx.fillStyle = "#CFA76E";
    ctx.fillRect(100,8,100,7);
    ctx.strokeRect(100.5,8.5,100,7);
    ctx.beginPath();
    ctx.lineWidth = 0.8;
    ctx.moveTo(100.5,10.5);
    ctx.lineTo(200,10.5);
    ctx.moveTo(100.5,12);
    ctx.lineTo(200,12);
    ctx.stroke();
    //door
    ctx.beginPath();
    ctx.strokeStyle="grey";
    ctx.lineCap="round";
    ctx.lineWidth=0.8;
    ctx.moveTo(15.5,120.5);
    ctx.lineTo(15.5,135);
    ctx.lineTo(30,142.5);
    ctx.lineTo(30,128);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle="#a9c8fc";
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(22.5,138.25);
    ctx.lineTo(23.5,137.5);
    ctx.stroke();
    //marius
    ctx.beginPath();
    ctx.fillStyle="#ffe0bd";
    ctx.arc(15.5,100.5,5,0,2*Math.PI);
    ctx.moveTo(20.5,102.5);
    ctx.lineTo(27,106);
    ctx.lineTo(30,112);
    ctx.moveTo(27,106);
    ctx.lineTo(30,100);
    ctx.moveTo(24,104);
    ctx.lineTo(20,94);
    ctx.stroke();
    ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.fillStyle="black";
    cw=canvas.width;
    ch=canvas.height;
    ctx.translate(-75,90);
    ctx.rotate(-40*Math.PI/90);
    ctx.fillText("Domnu' Student!",15.5,90);
    ctx.restore();
}

function drawC309()
{
    backgroundColor = "#d8d09f"
	//caseta pal-bej
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(30,15,240,200);
    ctx.fillStyle="#f1f1f1";
    ctx.fillRect(0, 0, 29, 200);
    ctx.fillRect(29, 0, 300, 14);
    ctx.fillRect(271, 0, 30, 200);
    ctx.beginPath();
    ctx.strokeStyle="#CFA76E";
    ctx.lineWidth=2;
    ctx.strokeRect(30.5,15.5,240,200);
    //draw walls
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth = 0.8;
    ctx.moveTo(20, 10);
    ctx.lineTo(30, 15);
    ctx.stroke();
    ctx.moveTo(270, 15);
    ctx.lineTo(278, 10);
    ctx.stroke();
    //windows-right
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 20);
    ctx.lineTo(275, 35);
    ctx.lineTo(275, 45);
    ctx.lineTo(300, 30);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 27.5);
    ctx.lineTo(287.5, 36.5);
    ctx.moveTo(300, 25);
    ctx.lineTo(275, 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 35);
    ctx.lineTo(275, 50);
    ctx.lineTo(275, 60);
    ctx.lineTo(300, 45);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 42.5);
    ctx.lineTo(287.5, 51.5);
    ctx.moveTo(300, 40);
    ctx.lineTo(275, 55);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 50);
    ctx.lineTo(275, 65);
    ctx.lineTo(275, 75);
    ctx.lineTo(300, 60);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 57.5);
    ctx.lineTo(287.5, 66.5);
    ctx.moveTo(300, 55);
    ctx.lineTo(275, 70);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 80);
    ctx.lineTo(275, 95);
    ctx.lineTo(275, 105);
    ctx.lineTo(300, 90);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 87.5);
    ctx.lineTo(287.5, 96.5);
    ctx.moveTo(300, 85);
    ctx.lineTo(275, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 65);
    ctx.lineTo(275, 80);
    ctx.lineTo(275, 90);
    ctx.lineTo(300, 75);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.moveTo(287.5, 72.5);
    ctx.lineTo(287.5, 81.5);
    ctx.moveTo(300, 70);
    ctx.lineTo(275, 85);
    ctx.stroke();
    //cuier
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle="brown";
    ctx.lineCap="round";
    ctx.fillStyle = "#CFA76E";
    ctx.fillRect(100,5,100,10);
    ctx.strokeRect(100.5,5.5,100,10);
    ctx.beginPath();
    ctx.lineWidth = 0.8;
    ctx.moveTo(100.5,8.5);
    ctx.lineTo(200,8.5);
    ctx.moveTo(100.5,10);
    ctx.lineTo(200,10);
    ctx.stroke();
    //door
    ctx.beginPath();
    ctx.strokeStyle="#362511";
    ctx.lineCap="round";
    ctx.lineWidth=0.8;
    ctx.moveTo(15.5,25.5);
    ctx.lineTo(15.5,40);
    ctx.lineTo(30,47.5);
    ctx.lineTo(30,33);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle="#CFA76E";
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle="cobalt";
    ctx.moveTo(22.5,43.5);
    ctx.lineTo(23,42);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle="#362511";
    ctx.moveTo(30,33);
    ctx.lineTo(30,28.5);
    ctx.lineTo(15.5,21);
    ctx.lineTo(15.5,25.5);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    //chairs
    ctx.beginPath();
    ctx.moveTo(29.5,80.5);
    ctx.lineTo(25,75);
    ctx.lineTo(25.5,85);
    ctx.lineTo(29,90);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(25.5,85);
    ctx.lineTo(20,83.5);
    ctx.lineTo(20.5,73.5);
    ctx.lineTo(25,75);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.moveTo(20,83.5);
    ctx.lineTo(24.5,89.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20,83.5);
    ctx.lineTo(15.5,80);
    ctx.lineTo(15.5,69.5);
    ctx.lineTo(20.5,73.5);
    ctx.closePath();
    ctx.stroke(); 
    ctx.fill(); 

	ctx.beginPath();
    ctx.moveTo(29.5,95.5);
    ctx.lineTo(25,90);
    ctx.lineTo(25.5,100);
    ctx.lineTo(29,105);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(25.5,100);
    ctx.lineTo(20,98.5);
    ctx.lineTo(20.5,88.5);
    ctx.lineTo(25,90);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.moveTo(20,98.5);
    ctx.lineTo(24.5,104.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20,98.5);
    ctx.lineTo(15.5,95);
    ctx.lineTo(15.5,84.5);
    ctx.lineTo(20.5,88.5);
    ctx.closePath();
    ctx.stroke(); 
    ctx.fill(); 

    ctx.beginPath();
    ctx.moveTo(29.5,110.5);
    ctx.lineTo(25,105);
    ctx.lineTo(25.5,115);
    ctx.lineTo(29,120);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(25.5,115);
    ctx.lineTo(20,113.5);
    ctx.lineTo(20.5,103.5);
    ctx.lineTo(25,105);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.moveTo(20,113.5);
    ctx.lineTo(24.5,119.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20,113.5);
    ctx.lineTo(15.5,110);
    ctx.lineTo(15.5,99.5);
    ctx.lineTo(20.5,103.5);
    ctx.closePath();
    ctx.stroke(); 
    ctx.fill();  
}

// Method for checking if all normal students are dead - next level requirement

function checkIfAllDead() {
    var allDead = true;
    for (var i = 0; i < listOfStudents.length; i++) {
        if (listOfStudents[i].alive && listOfStudents[i].type == 'normal') {
            allDead = false;
            break;
        }
    }
    if (allDead) {
        //console.log('All dead!');
        return true;
    } else {
        return false;
    }
}

// Method for drawing normal students

function drawStudents() {

    //Adding + drawing left row 1 students

    for (var i = 0; i < 6; i++) {
        var x = 76 + 10 * i;
        var y = 28;
        listOfStudents.push(new Student(ctx, x, y, 'left', 1, i + 4, true, 'normal', 30));
        listOfStudents[i].draw();
    }

    //Adding + drawing right row 1 students

    for (var i = 0; i < 6; i++) {
        var x = 163 + 10 * i;
        var y = 28;
        listOfStudents.push(new Student(ctx, x, y, 'right', 1, i + 1, true, 'normal', 30));
        listOfStudents[i + 6].draw();
    }

    //Adding + drawing left row 2 students

    for (var i = 0; i < 7; i++) {
        var x = 66 + 10 * i;
        var y = 43;
        listOfStudents.push(new Student(ctx, x, y, 'left', 2, i + 3, true, 'normal', 20));
        listOfStudents[i + 12].draw();
    }

    //Adding + drawing right row 2 students

    for (var i = 0; i < 7; i++) {
        var x = 163 + 10 * i;
        var y = 43;
        listOfStudents.push(new Student(ctx, x, y, 'right', 2, i + 1, true, 'normal', 20));
        listOfStudents[i + 19].draw();
    }

    //Adding + drawing left row 3 students

    for (var i = 0; i < 9; i++) {
        var x = 46 + 10 * i;
        var y = 58;
        listOfStudents.push(new Student(ctx, x, y, 'left', 3, i + 1, true, 'normal', 10));
        listOfStudents[i + 26].draw();
        frontStudents.push(listOfStudents[i + 26]);
    }

    //Adding + drawing right row 3 students

    for (var i = 0; i < 9; i++) {
        var x = 163 + 10 * i;
        var y = 58;
        listOfStudents.push(new Student(ctx, x, y, 'right', 3, i + 1, true, 'normal', 10));
        listOfStudents[i + 35].draw();
        frontStudents.push(listOfStudents[i + 35]);
    }
}

// Method for moving students

function moveStudents() {
    for (var i = 0; i < listOfStudents.length; i++) {
        if (listOfStudents[i].type == 'normal') {
            listOfStudents[i].move();
        }
    }
}

// Methods that coordinates students' projectiles. Randomly choses a student from the front row. If no student is available on that line, another student will be chosen. Only student in front row shoot.

function studentAI() {

    normalInterval = setInterval(function () {
        var choice = Math.floor(Math.random() * (frontStudents.length))
        while (!frontStudents[choice].alive) {
            choice = Math.floor(Math.random() * (frontStudents.length))
        }
        //console.log(frontStudents);
        //console.log('Chose student: ' + choice);
        //console.log('Selected student number: ' + choice);
        frontStudents[choice].fire();
        //console.log('Firing.')
    }, 2000)

}

// Method that controls the special student's movement

function specialStudentAI() {

    var repetitions = 0;
    specialInterval = setInterval(function () {
        // Open door if in C2
        if (backgroundColor == '#a9c8fc') {
            ctx.fillStyle = 'black';
            ctx.fillRect(138, 1, 10, 14);
        }
        var specialStudent = new Student(ctx, 143, 20, null, null, null, true, 'special', 100);
        console.log('Created special student.');
        listOfStudents.push(specialStudent);
        //console.log(listOfStudents);
        specialStudent.move();
        if (++repetitions == 1) {
            repetitions = 0;
            var intervalId = setInterval(function () {
                // Closed door if in C2
                if (backgroundColor == '#a9c8fc') {
                    ctx.fillStyle = 'brown';
                    ctx.fillRect(138, 2, 9, 12);
                    ctx.fillStyle = 'black';
                    ctx.fillRect(145, 9, 2, 2);
                }
                if (++repetitions % 2 == 1) {
                    repetitions = 0;
                    window.clearInterval(intervalId);
                }
            }, 8000)
        }
    }, 10000);
}

// Method for changing level - TO IMPLEMENT - redrawing, randomly choosing background

function changeLevel() {
    frontStudents = [];
    listOfStudents = [];
    deskBits = [];
    window.clearInterval(normalInterval);
    window.clearInterval(specialInterval);
    window.clearInterval(projectileInterval);
    window.clearInterval(teacherProjectileInterval);
    var repetitions = 0;
    var intervalId = setInterval(function (listOfStudents) {
        ctx.fillStyle = '#6d9ce8';
        ctx.fillRect(0, 0, 400, 300);
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 2;
        ctx.shadowColor = "#57575c";
        ctx.shadowBlur = 3;
        ctx.fillStyle = 'white';
        ctx.font = "10px 'Press Start 2P'";
        ctx.fillText("Eliminated all students!", 40, 70);
        ctx.fillText("Advancing to next level ...", 23, 90);
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        if (++repetitions == 1) {
            window.clearInterval(intervalId);
            repetitions = 0;
            intervalId = setInterval(function () {
                justChanged = true;
                levelAdvance ++;
                if (levelAdvance % 3 == 0) {
                    drawC2();
                } else if (levelAdvance % 3 == 1) {
                    drawC112();
                } else if (levelAdvance % 3 == 2) {
                    drawC309();
                }
                livesArea();
                drawLives(teacher.lives);
                scoreArea();
                drawScore(score);
                drawTables();
                drawDesk();
                teacher.x = 140;
                teacher.y = 130;
                teacher.draw();
                justChanged = false;
                drawStudents();
                studentAI();
                specialStudentAI();
                if (++repetitions == 1) {
                    window.clearInterval(intervalId);
                }
            }, 1500);
        }
    })
    /*drawC2();
    livesArea();
    drawLives(teacher.lives);
    scoreArea();
    drawScore(score);
    drawTables();
    drawDesk();
    teacher.draw();
    drawStudents();
    studentAI();
    specialStudentAI();*/

    //moveStudents();
}

// Method used for checking for losing condition

function checkGameOver() {
    var cnv = document.getElementById("my-canvas");
    ctx.clearRect(0, 0, 300, 300);

    // canvas.style.display="none";

    // cnv.style.display = "block";
    hovered = false;
    var canvas = document.getElementById("my-canvas");
    // ctx.clearRect(0, 0, 300, 300);
    var cnv = document.createElement('canvas'),
        newContext = canvas.getContext('2d');
    // Insert the new canvas after the old one
    canvas.parentNode.insertBefore(cnv, canvas.nextSibling);
    // Remove old canvas. Now the new canvas has its position.
    canvas.parentNode.removeChild(canvas);
    cnv.id = "my-canvas";
    //canvas.style.display="none";
    //canvas=null;  
    cnv.style.display = "none";
    var cenv = document.getElementById("end-canvas");
    cenv.style.display = "block";
    outro();
    listOfStudents = [];
    deskBits = [];
    frontStudents = [];
    window.clearInterval(normalInterval);
    window.clearInterval(specialInterval);
    window.clearInterval(projectileInterval);
    window.clearInterval(teacherProjectileInterval);

    var top;
    var len = localStorage.length;
    localStorage.setItem(len, username + " " + score);
    top = localStorage.getItem(localStorage.key(len));
    document.getElementById("result").innerHTML += top + "<br />";

    //localStorage.clear();
}

//Student class
class Student {
    constructor(context, x, y, side, row, line, alive, type, score) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.side = side;
        this.row = row;
        this.line = line;
        this.alive = alive;
        this.type = type;
        this.score = score;
    }
    draw() {
        if (this.type == 'normal') {
            //console.log('Drawing student...')
            this.context.fillStyle = 'black';
            //this.context.fillRect(this.x, this.y, 7, 7);
            this.context.fillRect(this.x + 1, this.y, 5, 3);
            this.context.fillStyle = 'white';
            this.context.fillRect(this.x + 2, this.y + 1, 1, 1);
            this.context.fillRect(this.x + 4, this.y + 1, 1, 1);
            this.context.fillStyle = 'black';
            this.context.fillRect(this.x + 3, this.y + 3, 1, 1);
            this.context.fillRect(this.x + 1, this.y + 4, 5, 1);
            this.context.fillRect(this.x + 2, this.y + 5, 1, 1);
            this.context.fillRect(this.x + 4, this.y + 5, 1, 1);
        }
        if (this.type == 'special') {
            //this.context.fillStyle = 'red';
            //this.context.fillRect(this.x, this.y, 10, 5);
            this.context.fillStyle = 'black';
            this.context.fillRect(this.x + 3, this.y - 3, 4, 2);
            this.context.fillStyle = 'white';
            this.context.fillRect(this.x + 4, this.y - 2, 2, 1);
            this.context.fillStyle = 'black';
            this.context.fillRect(this.x + 1, this.y - 1, 8, 1);
            this.context.fillRect(this.x + 8, this.y - 3, 1, 3);
            this.context.fillRect(this.x + 1, this.y - 1, 1, 3);
            this.context.fillRect(this.x + 3, this.y, 4, 2);
            this.context.fillStyle = backgroundColor;
            this.context.fillRect(this.x + 4, this.y + 1, 2, 1);
        }
    }
    erase() {
        if (this.type == 'normal') {
            this.context.fillStyle = backgroundColor;
            this.context.fillRect(this.x, this.y, 7, 7);
        }
        if (this.type == 'special') {
            this.context.fillStyle = backgroundColor;
            this.context.fillRect(this.x, this.y - 3, 10, 5);
        }
    }
    moveRight() {
        var repetitions = 0;
        var student = this;
        var intervalId = setInterval(function () {
            student.erase();
            student.x = student.x + 1;
            student.draw();
            if (++repetitions == 10) {
                window.clearInterval(intervalId);
            }
        }, 600)
    }
    moveLeft() {
        var repetitions = 0;
        var student = this;
        var intervalId = setInterval(function () {
            student.erase();
            student.x = student.x - 1;
            student.draw();
            if (++repetitions == 10) {
                window.clearInterval(intervalId);
            }
        }, 600)
    }
    moveDown() {
        var repetitions = 0;
        var student = this;
        if (student.alive) {
            var intervalId = setInterval(function () {
                student.erase();
                student.y = student.y + 15;
                student.draw();
                if (++repetitions == 1) {
                    window.clearInterval(intervalId);
                }
            }, 600)
        }
    }

    // Methods used for movement - doesn't erase the student behind when they first arrive on lower level seat

    nothingBehind() {
        for (var i = 0; i < listOfStudents.length; i++) {
            if (listOfStudents[i].line == this.line && listOfStudents[i].row == this.row - 1) {
                return true;
            }
        }
        return false;
    }

    onEdge() {
        if ((this.side == 'left' && ((this.row == 2 && this.line == 3) || (this.row == 3 && (this.line == 1 || this.line == 2)))) || (this.side == 'right' && ((this.row == 2 && this.line == 7) || (this.row == 3 && (this.line == 8 || this.line == 9))))) {
            return true;
        }
        return false;
    }

    //Moves the student one row downwards

    moveDown() {
        if (!this.nothingBehind()) {
            this.erase();
        }
        if (this.onEdge()) {
            this.erase();
        }
        this.y = this.y + 15;
        this.draw();
        if (!this.alive) {
            this.erase();
        }
    }

    //Student movement method: x + 1 moves right, moveDown() moves down, x - 1 moves left; intervals decrease

    //After updating position and drawing, we check if student is still alive. If dead, student gets erased.

    move() {
        if (this.type == 'normal') {
            var repetitions = 0;
            var student = this;
            var intervalId = setInterval(function () {
                // First movement to the right
                student.erase();
                student.x = student.x + 1;
                student.draw();
                if (repetitions % 2 == 0 && student.alive) {
                    student.context.fillStyle = 'red';
                    student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                    student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                }
                if (!student.alive) {
                    student.erase();
                }
                if (++repetitions == 10) {
                    window.clearInterval(intervalId);
                    repetitions = 0;
                    intervalId = setInterval(function () {
                        // First movement downwards
                        student.moveDown();
                        if (repetitions % 2 == 0 && student.alive) {
                            student.context.fillStyle = 'red';
                            student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                            student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                        }
                        if (++repetitions == 1) {
                            window.clearInterval(intervalId);
                            repetitions = 0;
                            intervalId = setInterval(function () {
                                // First movement to the left
                                student.erase();
                                student.x = student.x - 1;
                                student.draw();
                                if (repetitions % 2 == 1 && student.alive) {
                                    student.context.fillStyle = 'red';
                                    student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                    student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                }
                                if (!student.alive) {
                                    student.erase();
                                }
                                if (++repetitions == 10) {
                                    window.clearInterval(intervalId);
                                    repetitions = 0;
                                    intervalId = setInterval(function () {
                                        // Second movement downwards
                                        student.moveDown();
                                        if (repetitions % 2 == 1 && student.alive) {
                                            student.context.fillStyle = 'red';
                                            student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                            student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                        }
                                        if (++repetitions == 1) {
                                            window.clearInterval(intervalId);
                                            repetitions = 0;
                                            intervalId = setInterval(function () {
                                                // Second movement to the right
                                                student.erase();
                                                student.x = student.x + 1;
                                                student.draw();
                                                if (repetitions % 2 == 0 && student.alive) {
                                                    student.context.fillStyle = 'red';
                                                    student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                                    student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                                }
                                                if (!student.alive) {
                                                    student.erase();
                                                }
                                                if (++repetitions == 10) {
                                                    window.clearInterval(intervalId);
                                                    repetitions = 0;
                                                    intervalId = setInterval(function () {
                                                        // Third movement downwards
                                                        student.moveDown();
                                                        if (repetitions % 2 == 0 && student.alive) {
                                                            student.context.fillStyle = 'red';
                                                            student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                                            student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                                        }
                                                        if (++repetitions == 1) {
                                                            window.clearInterval(intervalId);
                                                            repetitions = 0;
                                                            intervalId = setInterval(function () {
                                                                // Second movement to the left
                                                                student.erase();
                                                                student.x = student.x - 1;
                                                                student.draw();
                                                                if (repetitions % 2 == 1 && student.alive) {
                                                                    student.context.fillStyle = 'red';
                                                                    student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                                                    student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                                                }
                                                                if (!student.alive) {
                                                                    student.erase();
                                                                }
                                                                if (++repetitions == 10) {
                                                                    window.clearInterval(intervalId);
                                                                    repetitions = 0;
                                                                    intervalId = setInterval(function () {
                                                                        // Fourth movement downwards
                                                                        var onRow = false;
                                                                        for (var i = 0; i < frontStudents.length; i++) {
                                                                            if (frontStudents[i].alive == true && frontStudents[i].row == 3) {
                                                                                onRow = true;
                                                                                break;
                                                                            }
                                                                        }
                                                                        if (!onRow) {
                                                                            student.moveDown();
                                                                            if (repetitions % 2 == 1 && student.alive) {
                                                                                student.context.fillStyle = 'red';
                                                                                student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                                                                student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                                                            }
                                                                        } else {
                                                                            // Losing condition - bottom students reach desk
                                                                            console.log('Game over.')
                                                                            gameOver = true;
                                                                            window.clearInterval(intervalId);
                                                                            checkGameOver();
                                                                        }
                                                                        if (++repetitions == 1) {
                                                                            window.clearInterval(intervalId);
                                                                            repetitions = 0;
                                                                            if (student.alive) {
                                                                                intervalId = setInterval(function () {
                                                                                    // Third movement to the right
                                                                                    student.erase();
                                                                                    student.x = student.x + 1;
                                                                                    student.draw();
                                                                                    if (repetitions % 2 == 0 && student.alive) {
                                                                                        student.context.fillStyle = 'red';
                                                                                        student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                                                                        student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                                                                    }
                                                                                    if (!student.alive) {
                                                                                        student.erase();
                                                                                    }
                                                                                    if (++repetitions == 10) {
                                                                                        window.clearInterval(intervalId);
                                                                                        repetitions = 0;
                                                                                        intervalId = setInterval(function () {
                                                                                            // Fifth movement downwards - TO IMPLEMENT - check winning condition for 4th, 5th, 6th movement downwards
                                                                                            var onRow = false;
                                                                                            for (var i = 0; i < frontStudents.length; i++) {
                                                                                                if (frontStudents[i].alive == true && frontStudents[i].row == 2) {
                                                                                                    onRow = true;
                                                                                                    break;
                                                                                                }
                                                                                            }
                                                                                            if (!onRow) {
                                                                                                student.moveDown();
                                                                                                if (repetitions % 2 == 0 && student.alive) {
                                                                                                    student.context.fillStyle = 'red';
                                                                                                    student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                                                                                    student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                                                                                }
                                                                                            } else {
                                                                                                // Losing condition - bottom students reach desk
                                                                                                console.log('Game over.')
                                                                                                gameOver = true;
                                                                                                window.clearInterval(intervalId);
                                                                                                checkGameOver();
                                                                                            }
                                                                                            if (++repetitions == 1) {
                                                                                                window.clearInterval(intervalId);
                                                                                                repetitions = 0;
                                                                                                if (student.alive) {
                                                                                                    intervalId = setInterval(function () {
                                                                                                        // Third movement to the left
                                                                                                        student.erase();
                                                                                                        student.x = student.x - 1;
                                                                                                        student.draw();
                                                                                                        if (repetitions % 2 == 1 && student.alive) {
                                                                                                            student.context.fillStyle = 'red';
                                                                                                            student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                                                                                            student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                                                                                        }
                                                                                                        if (!student.alive) {
                                                                                                            student.erase();
                                                                                                        }
                                                                                                        if (++repetitions == 10) {
                                                                                                            window.clearInterval(intervalId);
                                                                                                            repetitions = 0;
                                                                                                            intervalId = setInterval(function () {
                                                                                                                // Sixth movement downwards
                                                                                                                var onRow = false;
                                                                                                                for (var i = 0; i < frontStudents.length; i++) {
                                                                                                                    if (frontStudents[i].alive == true && frontStudents[i].row == 1) {
                                                                                                                        onRow = true;
                                                                                                                        break;
                                                                                                                    }
                                                                                                                }
                                                                                                                if (!onRow) {
                                                                                                                    student.moveDown();
                                                                                                                    if (repetitions % 2 == 1 && student.alive) {
                                                                                                                        student.context.fillStyle = 'red';
                                                                                                                        student.context.fillRect(student.x + 2, student.y + 1, 1, 1);
                                                                                                                        student.context.fillRect(student.x + 4, student.y + 1, 1, 1);
                                                                                                                    }
                                                                                                                } else {
                                                                                                                    // Losing condition - bottom students reach desk
                                                                                                                    console.log('Game over.')
                                                                                                                    gameOver = true;
                                                                                                                    window.clearInterval(intervalId);
                                                                                                                    checkGameOver();
                                                                                                                }
                                                                                                                if (++repetitions == 1) {
                                                                                                                    window.clearInterval(intervalId);
                                                                                                                }
                                                                                                            }, 200)
                                                                                                        }
                                                                                                    }, 200)
                                                                                                }
                                                                                            }
                                                                                        }, 250)
                                                                                    }
                                                                                }, 350)
                                                                            }
                                                                        }
                                                                    }, 350)
                                                                }
                                                            }, 350)
                                                        }
                                                    }, 350)
                                                }
                                            }, 450)
                                        }
                                    }, 450)
                                }
                            }, 450)
                        }
                    }, 600)
                }
            }, 600)
        }
        if (this.type == 'special' && this.alive) {
            var repetitions = 0;
            var student = this;
            var intervalId = setInterval(function () {
                if (student.x <= 260) {
                    student.erase();
                    student.x = student.x + 1;
                    student.draw();
                }
                if ((repetitions >= 0 && repetitions <= 10) || (repetitions >= 20 && repetitions <= 30) || (repetitions >= 40 && repetitions <= 50) || (repetitions >= 60 && repetitions <= 70) || (repetitions >= 80 && repetitions <= 90) && student.alive) {
                    student.context.fillStyle = 'black';
                    student.context.fillRect(student.x + 1, student.y - 3, 1, 3);
                    student.context.fillRect(student.x + 8, student.y - 1, 1, 3);
                    student.context.fillStyle = backgroundColor;
                    student.context.fillRect(student.x + 1, student.y, 1, 3);
                    student.context.fillRect(student.x + 8, student.y - 4, 1, 3);
                }
                if (!student.alive) {
                    student.erase();
                }
                if (++repetitions == 100 && student.alive) {
                    window.clearInterval(intervalId);
                    repetitions = 0;
                    intervalId = setInterval(function () {
                        if (student.x >= 32) {
                            student.erase();
                            student.x = student.x - 1;
                            student.draw();
                        }
                        if ((repetitions >= 0 && repetitions <= 10) || (repetitions >= 20 && repetitions <= 30) || (repetitions >= 40 && repetitions <= 50) || (repetitions >= 60 && repetitions <= 70) || (repetitions >= 80 && repetitions <= 90) || (repetitions >= 100 && repetitions <= 110) || (repetitions >= 120 && repetitions <= 130) || (repetitions >= 140 && repetitions <= 150) || (repetitions >= 160 && repetitions <= 170) || (repetitions >= 180 && repetitions <= 190) && student.alive) {
                            student.context.fillStyle = 'black';
                            student.context.fillRect(student.x + 1, student.y - 3, 1, 3);
                            student.context.fillRect(student.x + 8, student.y - 1, 1, 3);
                            student.context.fillStyle = backgroundColor;
                            student.context.fillRect(student.x + 1, student.y, 1, 3);
                            student.context.fillRect(student.x + 8, student.y - 4, 1, 3);
                        }
                        if (!student.alive && student.x <= 260) {
                            student.erase();
                        }
                        if (++repetitions == 200 && student.alive) {
                            window.clearInterval(intervalId);
                            repetitions = 0;
                            intervalId = setInterval(function () {
                                if (student.x <= 260) {
                                    student.erase();
                                    student.x = student.x + 1;
                                    student.draw();
                                }
                                if ((repetitions >= 0 && repetitions <= 10) || (repetitions >= 20 && repetitions <= 30) || (repetitions >= 40 && repetitions <= 50) || (repetitions >= 60 && repetitions <= 70) || (repetitions >= 80 && repetitions <= 90) || (repetitions >= 100 && repetitions <= 110) || (repetitions >= 120 && repetitions <= 130) || (repetitions >= 140 && repetitions <= 150) || (repetitions >= 160 && repetitions <= 170) || (repetitions >= 180 && repetitions <= 190) && student.alive) {
                                    student.context.fillStyle = 'black';
                                    student.context.fillRect(student.x + 1, student.y - 3, 1, 3);
                                    student.context.fillRect(student.x + 8, student.y - 1, 1, 3);
                                    student.context.fillStyle = backgroundColor;
                                    student.context.fillRect(student.x + 1, student.y, 1, 3);
                                    student.context.fillRect(student.x + 8, student.y - 4, 1, 3);
                                }
                                if (!student.alive && student.x >= 32) {
                                    student.erase();
                                }
                                if (++repetitions == 200 && student.alive) {
                                    window.clearInterval(intervalId);
                                    repetitions = 0;
                                    intervalId = setInterval(function () {
                                        if (student.x >= 32) {
                                            student.erase();
                                            student.x = student.x - 1;
                                            student.draw();
                                        }
                                        if ((repetitions >= 0 && repetitions <= 20) || (repetitions >= 40 && repetitions <= 60) || (repetitions >= 80 && repetitions <= 100) || (repetitions >= 120 && repetitions <= 140) || (repetitions >= 160 && repetitions <= 180) && student.alive) {
                                            student.context.fillStyle = 'black';
                                            student.context.fillRect(student.x + 1, student.y - 3, 1, 3);
                                            student.context.fillRect(student.x + 8, student.y - 1, 1, 3);
                                            student.context.fillStyle = backgroundColor;
                                            student.context.fillRect(student.x + 1, student.y, 1, 3);
                                            student.context.fillRect(student.x + 8, student.y - 4, 1, 3);
                                        }
                                        if (!student.alive) {
                                            student.erase();
                                        }
                                        if (++repetitions == 100 && student.alive) {
                                            window.clearInterval(intervalId);
                                            student.erase();
                                            student.alive = false;
                                        }
                                    }, 5)
                                }
                            }, 15);
                        }
                    }, 15)
                }
            }, 15)
        }
    }
    fire() {
        if (this.type == 'normal') {
            //console.log(listOfStudents);
            var projectile = new Projectile(this.context, this.x, this.y, 'student');
            //console.log('Projectile info: ' + projectile.x + ' ' + projectile.y);
            projectileInterval = setInterval(function () {
                projectile.travel();
            }, 20)
        }

    }
    explode() {
        if (this.type == 'normal') {
            if (!checkIfAllDead()) {
                this.erase();
            }
            var repetitions = 0;
            var student = this;
            var intervalId = setInterval(function () {
                if (!checkIfAllDead()) {
                    student.context.fillStyle = 'red';
                    student.context.font = "4pt 'Press Start 2P'";
                    student.context.fillText('Picat!', student.x - 8, student.y);
                    if (++repetitions == 1) {
                        window.clearInterval(intervalId);
                        repetitions = 0;
                        intervalId = setInterval(function () {
                            student.context.fillStyle = 'yellow';
                            student.context.font = "4pt 'Press Start 2P'";
                            student.context.fillText('Picat!', student.x - 8, student.y);
                            if (++repetitions == 1) {
                                window.clearInterval(intervalId);
                                repetitions = 0;
                                intervalId = setInterval(function () {
                                    student.context.fillStyle = 'red';
                                    student.context.font = "4pt 'Press Start 2P'";
                                    student.context.fillText('Picat!', student.x - 8, student.y);
                                    if (++repetitions == 1) {
                                        window.clearInterval(intervalId);
                                        repetitions = 0;
                                        student.context.fillStyle = backgroundColor;
                                        student.context.fillRect(student.x - 10, student.y - 5, 35, 5);
                                    }
                                }, 100);
                            }
                        }, 100);
                    }
                }
            }, 100)
        }
        if (this.type == 'special') {
            this.erase();
            var repetitions = 0;
            var student = this;
            var intervalId = setInterval(function () {
                student.context.fillStyle = 'yellow';
                var pixelX = Math.floor(Math.random() * (student.x + 6 - student.x)) + student.x;
                var pixelY = Math.floor(Math.random() * (student.y - student.y - 3)) + student.y;
                student.context.fillRect(pixelX, pixelY, 2, 2);
                setTimeout(function () {
                    student.context.fillStyle = 'red';
                    var pixelX = Math.floor(Math.random() * (student.x + 6 - student.x)) + student.x;
                    var pixelY = Math.floor(Math.random() * (student.y - student.y - 3)) + student.y;
                    student.context.fillRect(pixelX, pixelY, 2, 2);
                }, 10);
                if (++repetitions == 50) {
                    window.clearInterval(intervalId);
                    console.log('Special student explosion finished.');
                    setTimeout(function () {
                        student.erase();
                    }, 50);
                }
            }, 20)
        }
    }
    die() {
        if (this.type == 'normal') {
            if (this.alive) {
                window.clearInterval(specialInterval);
                this.explode();
                this.alive = false;
                // After each kill, check if all students are dead. If true, advance to next level.
                if (checkIfAllDead()) {
                    changeLevel();
                }
                console.log('Student on ' + this.side + ' side, row ' + this.row + ', line ' + this.line + ' is dead.');
                for (var i = 0; i < listOfStudents.length; i++) {
                    //console.log('Updating front students ...');
                    if (listOfStudents[i].side == this.side && listOfStudents[i].row == this.row - 1 && listOfStudents[i].line == this.line && listOfStudents[i].alive) {
                        frontStudents[frontStudents.indexOf(this)] = listOfStudents[i];
                    }
                }
                //console.log('Finished updating front students!');
            }
        }
        if (this.type == 'special') {
            if (this.alive) {
                this.explode();
                this.alive = false;
                console.log('Special student is dead.');
            }
        }
    }
}

//Projectile class
class Projectile {
    constructor(context, x, y, type) {
        this.context = context;
        this.type = type;
        if (this.type == 'teacher') {
            this.x = x + 9;
            this.y = y - 3;
        }
        if (this.type == 'student') {
            this.x = x + 3;
            this.y = y + 8;
        }

    }
    draw() {
        this.context.fillStyle = 'black';
        this.context.fillRect(this.x, this.y, 1, 2)
        //console.log('Drawing projectile ...');
    }
    erase() {
        this.context.fillStyle = backgroundColor;
        this.context.fillRect(this.x, this.y, 1, 2);
    }

    // Method that checks projectile's surroundings, if it hits students, student dies, projectile disappears.
    // TO IMPLEMENT - table redrawing function, called each time a projectile travels

    travel() {
        if (this.type == 'teacher' && !checkIfAllDead()) {
            for (var i = 0; i < listOfStudents.length; i++) {
                if (listOfStudents[i].type == 'normal') {
                    if ((this.x >= listOfStudents[i].x && this.x <= listOfStudents[i].x + 7) && (this.y >= listOfStudents[i].y && this.y <= listOfStudents[i].y + 7) && listOfStudents[i].alive) {
                        listOfStudents[i].die();
                        this.erase();
                        this.y = -2;
                        //window.clearInterval(teacherProjectileInterval);
                        // Adding student score on death - DRAW SCORE FUNCTION
                        eraseScore(score);
                        if (listOfStudents[i] != undefined) {
                            score = score + listOfStudents[i].score;
                        }
                        drawScore(score);
                        console.log(score);
                        checkScore();
                    }
                }
                if (listOfStudents[i] != undefined) {
                    if (listOfStudents[i].type == 'special') {
                        if ((this.x >= listOfStudents[i].x && this.x <= listOfStudents[i].x + 10) && (this.y >= listOfStudents[i].y && this.y <= listOfStudents[i].y + 5) && listOfStudents[i].alive) {
                            listOfStudents[i].die();
                            this.erase();
                            this.y = -2;
                            //window.clearInterval(teacherProjectileInterval);
                            eraseScore(score);
                            score = score + listOfStudents[i].score;
                            drawScore(score);
                            console.log(score);
                            checkScore();
                            //listOfStudents.splice(-1, 1);  
                        }
                    }
                }
            }
            for (var i = 0; i < deskBits.length; i++) {
                if ((this.x >= deskBits[i].x && this.x <= deskBits[i].x + 10) && (this.y >= deskBits[i].y && this.y <= deskBits[i].y + 5)) {
                    if (deskBits[i].durability > 0) {
                        console.log('Desk hit.')
                        deskBits[i].deteriorate();
                        deskBits[i].durability = deskBits[i].durability - 1;
                        deskBits[i].durabilityCheck();
                        this.erase();
                        this.y = -2;
                        //window.clearInterval(teacherProjectileInterval);
                    }
                }
            }
            if (this.y <= 17) {
                this.erase();
                //window.clearInterval(teacherProjectileInterval);
            }
            else {
                this.erase();
                this.y = this.y - 2;
                this.draw();
                drawTables();
            }
        }
        if (this.type == 'student' && !checkIfAllDead()) {

            //console.log(this.y);
            // Check if projectile reached teacher
            if ((this.x >= teacher.x) && (this.x <= teacher.x + 20) && (this.y >= teacher.y) && (this.y <= teacher.y + 10)) {
                teacher.die();
                this.erase();
                this.y = 140;
                window.clearInterval(projectileInterval);

            }
            for (var i = 0; i < deskBits.length; i++) {
                if ((this.x >= deskBits[i].x && this.x <= deskBits[i].x + 10) && (this.y >= deskBits[i].y && this.y <= deskBits[i].y + 5)) {
                    if (deskBits[i].durability > 0) {
                        console.log('Desk hit.')
                        deskBits[i].deteriorate();
                        deskBits[i].durability = deskBits[i].durability - 1;
                        deskBits[i].durabilityCheck();
                        this.erase();
                        this.y = 140;
                        window.clearInterval(projectileInterval);
                    }
                }
            }
            if (this.y >= 138) {
                this.erase();
                window.clearInterval(projectileInterval);
            } else {
                this.erase();
                this.y = this.y + 2;
                this.draw();
                drawTables();
            }
        }
    }
}

//Teacher class
class Teacher {
    constructor(context, x, y, alive, lives) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.alive = alive;
        this.lives = lives;
    }
    draw() {
        //console.log(prof_choice);
        if (!checkIfAllDead()) {
            this.context.drawImage(profs[prof_choice], this.x, this.y - 2, 20, 21);
        }
        if (justChanged) {
            this.context.drawImage(profs[prof_choice], this.x, this.y - 2, 20, 21);
        }
    }
    erase() {
        if (!checkIfAllDead()) {
            this.context.fillStyle = backgroundColor;
            this.context.fillRect(this.x, this.y - 1, 20, 20);
        } 
    }
    moveRight() {
        if (this.x <= 240) {
            this.erase();
            this.x = this.x + 5;
            this.draw();
        }
    }
    moveLeft() {
        if (this.x >= 40) {
            this.erase();
            this.x = this.x - 5;
            this.draw();
        }
    }
    fire() {
        var projectile = new Projectile(this.context, this.x, this.y, 'teacher');
        teacherProjectileInterval = setInterval(function () {
            projectile.travel();
        }, 20)
        if (prof_choice == 1) {
            var repetitions = 0;
            var teacher = this;
            var intervalId = setInterval(function () {
                teacher.context.fillStyle = 'red';
                teacher.context.fillRect(teacher.x + 9, teacher.y + 9, 1, 1);
                teacher.context.fillRect(teacher.x + 13, teacher.y + 10, 1, 1);
                if (++repetitions == 1) {
                    window.clearInterval(intervalId);
                    repetitions = 0;
                    intervalId = setInterval(function () {
                        teacher.draw();
                        for (var i = 0; i < listOfStudents.length; i++) {
                            if (listOfStudents[i].type == 'normal' && listOfStudents[i].alive) {
                                listOfStudents[i].draw();
                            }
                        }
                        if (++repetitions == 1) {
                            window.clearInterval(intervalId);
                        }
                    }, 100);
                }
            });
        } else if (prof_choice == 0) {
            var repetitions = 0;
            var teacher = this;
            var intervalId = setInterval(function () {
                teacher.context.fillStyle = 'red';
                teacher.context.fillRect(teacher.x + 5, teacher.y + 9, 1, 1);
                teacher.context.fillRect(teacher.x + 8, teacher.y + 9, 1, 1);
                if (++repetitions == 1) {
                    window.clearInterval(intervalId);
                    repetitions = 0;
                    intervalId = setInterval(function () {
                        teacher.draw();
                        if (++repetitions == 1) {
                            window.clearInterval(intervalId);
                        }
                    }, 100);
                }
            });
        } else if (prof_choice == 2) {
            var repetitions = 0;
            var teacher = this;
            var intervalId = setInterval(function () {
                teacher.context.fillStyle = 'red';
                teacher.context.fillRect(teacher.x + 8, teacher.y + 9, 1, 1);
                teacher.context.fillRect(teacher.x + 12, teacher.y + 8, 1, 1);
                if (++repetitions == 1) {
                    window.clearInterval(intervalId);
                    repetitions = 0;
                    intervalId = setInterval(function () {
                        teacher.draw();
                        if (++repetitions == 1) {
                            window.clearInterval(intervalId);
                        }
                    }, 100);
                }
            });
        }
    }
    explode() {
        this.erase();
        var repetitions = 0;
        var teacher = this;
        var explosionX = teacher.x - 2;
        var explosionY = teacher.y;
        var intervalId = setInterval(function () {
            teacher.context.fillStyle = 'yellow';
            teacher.context.font = "5pt 'Press Start 2P'";
            teacher.context.fillText('Aveti pauza!', explosionX - 8, explosionY + 5);
            if (++repetitions == 1) {
                window.clearInterval(intervalId);
                repetitions = 0;
                intervalId = setInterval(function () {
                    teacher.context.fillStyle = 'red';
                    teacher.context.font = "5pt 'Press Start 2P'";
                    teacher.context.fillText('Aveti pauza!', explosionX - 8, explosionY + 5);
                    if (++repetitions == 1) {
                        window.clearInterval(intervalId);
                        repetitions = 0;
                        intervalId = setInterval(function () {
                            teacher.context.fillStyle = 'yellow';
                            teacher.context.font = "5pt 'Press Start 2P'";
                            teacher.context.fillText('Aveti pauza!', explosionX - 8, explosionY + 5);
                            if (++repetitions == 1) {
                                window.clearInterval(intervalId);
                                repetitions = 0;
                                teacher.context.fillStyle = backgroundColor;
                                teacher.context.fillRect(explosionX - 10, explosionY - 2, 80, 7);
                                teacher.draw();
                            }
                        }, 250);
                    }
                }, 250);
            }
        }, 250)

    }

    // Teacher death method - killed, lives decrements. When lives is 0, game over.

    die() {
        if (this.alive) {
            this.alive = true;
            this.explode();
            console.log('Teacher killed.');
            eraseLives(this.lives);
            this.lives = this.lives - 1;
            drawLives(this.lives);
            console.log('Lives left: ' + this.lives);
            if (this.lives >= 1) {
                this.x = 140;
                this.y = 130;
                this.draw();
            }
            // TO IMPLEMENT - game over state
            if (!this.lives) {
                console.log('Game over');
                gameOver = true;
                window.clearInterval(normalInterval);
                window.clearInterval(specialInterval);
                window.clearInterval(projectileInterval);
                window.clearInterval(teacherProjectileInterval);
                checkGameOver();
            }
        }
    }
}

// Desk class
class Desk {
    constructor(context, x, y, durability) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.durability = durability;
    }
    draw() {
        this.context.fillStyle = 'brown';
        this.context.fillRect(this.x, this.y, 10, 5);
    }
    erase() {
        this.context.fillStyle = backgroundColor;
        this.context.fillRect(this.x, this.y, 10, 5);
    }
    deteriorate() {
        var deteriorateX = Math.floor(Math.random() * (this.x + 9 - this.x + 1)) + this.x;
        var deteriorateY = Math.floor(Math.random() * (this.y + 4 - this.y + 1)) + this.y;
        this.context.fillStyle = backgroundColor;
        this.context.fillRect(deteriorateX, deteriorateY, 1, 1);
    }
    durabilityCheck() {
        if (!this.durability) {
            this.erase();
        }
    }
}

//Check pressed keys, call methods accordingly
window.addEventListener('keydown', function (e) {
    if (e.keyCode == '65') {
        teacher.moveLeft();
        //console.log(teacher.x);
        //console.log(teacher.y);
    }
    if (e.keyCode == '68') {
        teacher.moveRight();
        //console.log(teacher.x);
        //sconsole.log(teacher.y);
    }
    if (e.keyCode == '87') {
        teacher.fire();
    }
}, false)

function initiateCanvas() {

    var canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');
    var canvasInfo = canvas.getBoundingClientRect();
    console.log(canvasInfo.height);
    console.log(canvasInfo.width);

    function clearCanvas() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvasInfo.height, canvasInfo.width);
    }

    // Initiate gameOver variable with false
    gameOver = false;

    // Variable that counts number of next levels is initialized with 0
    levelAdvance = 0;

    // Draw background

    drawC2();

    console.log(backgroundColor);

    // Instantiate + draw students

    drawStudents();

    //moveStudents();

    //Initiate teacher location
    teacher = new Teacher(ctx, 140, 130, true, 3);

    //Draw the teacher
    teacher.draw();

    // Draw lives

    livesArea();
    drawLives(teacher.lives);
    //eraseLives(teacher.lives);

    
    // Initiating the score with 0.
    score = 0;
    previousScore = 0;

    scoreArea();
    drawScore(score);

    // Drawing tables
    drawTables();

    // Creating + drawing desk
    drawDesk();

    studentAI();

    specialStudentAI();

}