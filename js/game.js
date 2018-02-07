//List with containing users, used to check their coordinates, call their methods
var listOfStudents = [];

//Student class
class Student {
    constructor(context, x, y) {
        this.context = context;
        this.x = x;
        this.y = y;
    }
    draw() {
        this.context.fillStyle = 'black';
        this.context.fillRect(this.x, this.y, 7, 7);
    }
    erase() {
        this.context.fillStyle = 'white';
        this.context.fillRect(this.x, this.y, 7, 7);
    }
    move() {
        var repetitions = 0;
        var student = this;
        var intervalId = setInterval(function() {
            student.erase();
            student.x = student.x + 1;
            student.draw();
            if (++repetitions == 20) {
                window.clearInterval(intervalId);
                console.log('Movement finished');
            }
        }, 500);
    }
    explode() {
        this.erase();
        var repetitions = 0;
        var ctx = this.context;
        var explosionX = this.x;
        var explosionY = this.y;
        var intervalId = setInterval(function () {
            ctx.fillStyle = 'red';
            ctx.fillRect(explosionX - 1, explosionY - 1, 9, 9);
            setTimeout(function () {
                ctx.fillStyle = 'yellow';
                ctx.fillRect(explosionX - 1, explosionY - 1, 9, 9);
            }, 5);
            if (++repetitions == 50) {
                window.clearInterval(intervalId);
                console.log('Explosion finished.');
                setTimeout(function () {
                    ctx.fillStyle = 'white';
                    ctx.fillRect(explosionX - 1, explosionY - 1, 9, 9);
                }, 100);
            }
        }, 20)
    }
    die() {
        this.explode();
        console.log('Student is dying.');
        listOfStudents.splice(listOfStudents.indexOf(this), 1);
    }
}

//Projectile class
class Projectile {
    constructor(context, teacherX, teacherY) {
        this.context = context;
        this.x = teacherX + 9;
        this.y = teacherY - 8;
    }
    draw() {
        this.context.fillStyle = 'black';
        this.context.fillRect(this.x, this.y, 1, 2)
    }
    erase() {
        this.context.fillStyle = 'white';
        this.context.fillRect(this.x, this.y, 1, 2);
    }
    travel() {
        for (var i = 0; i < listOfStudents.length; i++) {
            if (this.x == listOfStudents[i].x + 3 && this.y == listOfStudents[i].y + 6) {
                console.log('Target hit');
                listOfStudents[i].die();
            }
        }
        if (this.y <= 15) {
            this.erase();
        }
        else {
            this.erase();
            this.y = this.y - 2;
            this.draw();
        }

    }
}

//Teacher class
class Teacher {
    constructor(context, x, y) {
        this.context = context;
        this.x = x;
        this.y = y;
    }
    draw() {
        this.context.fillStyle = 'black';
        this.context.fillRect(this.x, this.y, 20, 10);
    }
    erase() {
        this.context.fillStyle = 'white';
        this.context.fillRect(this.x, this.y, 20, 10);
    }
    moveRight() {
        this.erase();
        this.context.fillStyle = 'black';
        this.x = this.x + 5;
        this.context.fillRect(this.x, this.y, 20, 10);
    }
    moveLeft() {
        this.erase();
        this.context.fillStyle = 'black';
        this.x = this.x - 5;
        this.context.fillRect(this.x, this.y, 20, 10);
    }
    fire() {
        var projectile = new Projectile(this.context, this.x, this.y);
        setInterval(function () {
            projectile.travel();
        }, 20)
    }
}

function initiateCanvas() {

    var canvas = document.getElementById("my-canvas");
    var ctx = canvas.getContext('2d');
    var canvasInfo = canvas.getBoundingClientRect();
    console.log(canvasInfo.height);
    console.log(canvasInfo.width);

    function clearCanvas() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvasInfo.height, canvasInfo.width);
    }

    //Initiate teacher location
    var teacher = new Teacher(ctx, 140, 130);

    //Check pressed keys, call methods accordingly
    window.addEventListener('keydown', function (e) {
        if (e.keyCode == '65') {
            teacher.moveLeft();
            console.log(teacher.x);
            console.log(teacher.y);
        }
        if (e.keyCode == '68') {
            teacher.moveRight();
            console.log(teacher.x);
            console.log(teacher.y);
        }
        if (e.keyCode == '87') {
            teacher.fire();
        }
    }, false)

    //Draw the teacher
    teacher.draw();

    // var student = new Student(ctx, 146, 70);

    // console.log(listOfStudents);
    // listOfStudents.push(student);
    // console.log(listOfStudents);
    // console.log(listOfStudents[0].y)
    // student.draw();
    // student.move();

    // Measurements: 7.5px - 1 unit
    // Use these measurements when drawing

    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(30, 15);
    ctx.lineTo(270, 15);
    ctx.stroke();
    ctx.moveTo(30, 15);
    ctx.lineTo(30, 150);
    ctx.stroke();
    ctx.moveTo(270, 15);
    ctx.lineTo(270, 150);
    ctx.stroke();
    ctx.lineTo(270, 15);
    ctx.stroke();

    ctx.strokeStyle = 'grey';

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