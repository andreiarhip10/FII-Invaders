// List with containing users, used to check their coordinates, call their methods
var listOfStudents = [];
// List containing the front students - the ones that are able to fire
var frontStudents = [];
// Teacher instance
var teacher;
// Score
var score;
// Variable that keeps count of previous bonus life score
var previousScore;

// Function for score cheking - used when awarding bonus life

function checkScore() {
    if (score >= previousScore + 400) {
        teacher.lives = teacher.lives + 1;
        console.log('Earned extra life.');
        previousScore = previousScore + 400;
    }
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
            this.context.fillStyle = 'black';
            this.context.fillRect(this.x, this.y, 7, 7);
        }
        if (this.type == 'special') {
            this.context.fillStyle = 'red';
            this.context.fillRect(this.x, this.y, 10, 5);
        }
    }
    erase() {
        if (this.type == 'normal') {
            this.context.fillStyle = 'white';
            this.context.fillRect(this.x, this.y, 7, 7);
        }
        if (this.type == 'special') {
            this.context.fillStyle = 'white';
            this.context.fillRect(this.x, this.y, 10, 5);
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
        var intervalId = setInterval(function () {
            student.erase();
            student.y = student.y + 15;
            student.draw();
            if (++repetitions == 1) {
                window.clearInterval(intervalId);
            }
        }, 600)
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
                student.erase();
                student.x = student.x + 1;
                student.draw();
                if (!student.alive) {
                    student.erase();
                }
                if (++repetitions == 10) {
                    window.clearInterval(intervalId);
                    repetitions = 0;
                    intervalId = setInterval(function () {
                        student.moveDown();
                        if (++repetitions == 1) {
                            window.clearInterval(intervalId);
                            repetitions = 0;
                            intervalId = setInterval(function () {
                                student.erase();
                                student.x = student.x - 1;
                                student.draw();
                                if (!student.alive) {
                                    student.erase();
                                }
                                if (++repetitions == 10) {
                                    window.clearInterval(intervalId);
                                    repetitions = 0;
                                    intervalId = setInterval(function () {
                                        student.moveDown();
                                        if (++repetitions == 1) {
                                            window.clearInterval(intervalId);
                                            repetitions = 0;
                                            intervalId = setInterval(function () {
                                                student.erase();
                                                student.x = student.x + 1;
                                                student.draw();
                                                if (!student.alive) {
                                                    student.erase();
                                                }
                                                if (++repetitions == 10) {
                                                    window.clearInterval(intervalId);
                                                    repetitions = 0;
                                                    intervalId = setInterval(function () {
                                                        student.moveDown();
                                                        if (++repetitions == 1) {
                                                            window.clearInterval(intervalId);
                                                            repetitions = 0;
                                                            intervalId = setInterval(function () {
                                                                student.erase();
                                                                student.x = student.x - 1;
                                                                student.draw();
                                                                if (!student.alive) {
                                                                    student.erase();
                                                                }
                                                                if (++repetitions == 10) {
                                                                    window.clearInterval(intervalId);
                                                                    repetitions = 0;
                                                                    intervalId = setInterval(function () {
                                                                        student.moveDown();
                                                                        if (++repetitions == 1) {
                                                                            window.clearInterval(intervalId);
                                                                            repetitions = 0;
                                                                            intervalId = setInterval(function () {
                                                                                student.erase();
                                                                                student.x = student.x + 1;
                                                                                student.draw();
                                                                                if (!student.alive) {
                                                                                    student.erase();
                                                                                }
                                                                                if (++repetitions == 10) {
                                                                                    window.clearInterval(intervalId);
                                                                                    repetitions = 0;
                                                                                    intervalId = setInterval(function () {
                                                                                        student.moveDown();
                                                                                        if (++repetitions == 1) {
                                                                                            window.clearInterval(intervalId);
                                                                                            repetitions = 0;
                                                                                            intervalId = setInterval(function () {
                                                                                                student.erase();
                                                                                                student.x = student.x - 1;
                                                                                                student.draw();
                                                                                                if (!student.alive) {
                                                                                                    student.erase();
                                                                                                }
                                                                                                if (++repetitions == 10) {
                                                                                                    window.clearInterval(intervalId);
                                                                                                    repetitions = 0;
                                                                                                    intervalId = setInterval(function () {
                                                                                                        student.moveDown();
                                                                                                        if (++repetitions == 1) {
                                                                                                            window.clearInterval(intervalId);
                                                                                                        }
                                                                                                    }, 200)
                                                                                                }
                                                                                            }, 200)
                                                                                        }
                                                                                    }, 250)
                                                                                }
                                                                            }, 350)
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
        if (this.type == 'special') {
            var repetitions = 0;
            var student = this;
            var intervalId = setInterval(function () {
                student.erase();
                student.x = student.x + 1;
                student.draw();
                if (!student.alive) {
                    student.erase();
                }
                if (++repetitions == 100) {
                    window.clearInterval(intervalId);
                    repetitions = 0;
                    intervalId = setInterval(function () {
                        student.erase();
                        student.x = student.x - 1;
                        student.draw();
                        if (!student.alive) {
                            student.erase();
                        }
                        if (++repetitions == 200) {
                            window.clearInterval(intervalId);
                            repetitions = 0;
                            intervalId = setInterval(function () {
                                student.erase();
                                student.x = student.x + 1;
                                student.draw();
                                if (!student.alive) {
                                    student.erase();
                                }
                                if (++repetitions == 200) {
                                    window.clearInterval(intervalId);
                                    repetitions = 0;
                                    intervalId = setInterval(function () {
                                        student.erase();
                                        student.x = student.x - 1;
                                        student.draw();
                                        if (!student.alive) {
                                            student.erase();
                                        }
                                        if (++repetitions == 100) {
                                            window.clearInterval(intervalId);
                                            student.erase();
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
            var projectile = new Projectile(this.context, this.x, this.y, 'student');
            setInterval(function () {
                projectile.travel();
            }, 20)
        }
    }
    explode() {
        if (this.type == 'normal') {
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
        if (this.type == 'special') {
            this.erase();
            var repetitions = 0;
            var ctx = this.context;
            var explosionX = this.x;
            var explosionY = this.y;
            var intervalId = setInterval(function () {
                ctx.fillStyle = 'yellow';
                ctx.fillRect(explosionX - 1, explosionY - 1, 11, 6);
                setTimeout(function () {
                    ctx.fillStyle = 'red';
                    ctx.fillRect(explosionX - 1, explosionY - 1, 11, 6);
                }, 5);
                if (++repetitions == 50) {
                    window.clearInterval(intervalId);
                    console.log('Special student explosion finished.');
                    setTimeout(function () {
                        ctx.fillStyle = 'white';
                        ctx.fillRect(explosionX - 1, explosionY - 1, 11, 6);
                    }, 100);
                }
            }, 20)
        }
    }
    die() {
        if (this.type == 'normal') {
            if (this.alive) {
                this.explode();
                this.alive = false;
                console.log('Student on ' + this.side + ' side, row ' + this.row + ', line ' + this.line + ' is dead.');
                for (var i = 0; i < listOfStudents.length; i++) {
                    if (listOfStudents[i].side == this.side && listOfStudents[i].row == this.row - 1 && listOfStudents[i].line == this.line) {
                        frontStudents[frontStudents.indexOf(this)] = listOfStudents[i];
                    }
                }
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
            this.y = y - 5;
        }
        if (this.type == 'student') {
            this.x = x + 3;
            this.y = y + 8;
        }

    }
    draw() {
        this.context.fillStyle = 'black';
        this.context.fillRect(this.x, this.y, 1, 2)
    }
    erase() {
        this.context.fillStyle = 'white';
        this.context.fillRect(this.x, this.y, 1, 2);
    }

    // Method that checks projectile's surroundings, if it hits students, student dies, projectile disappears.
    // TO IMPLEMENT - table redrawing function, called each time a projectile travels

    travel() {
        if (this.type == 'teacher') {
            for (var i = 0; i < listOfStudents.length; i++) {
                if (listOfStudents[i].type == 'normal') {
                    if ((this.x >= listOfStudents[i].x && this.x <= listOfStudents[i].x + 7) && (this.y >= listOfStudents[i].y && this.y <= listOfStudents[i].y + 7) && listOfStudents[i].alive) {
                        listOfStudents[i].die();
                        this.erase();
                        this.y = 0;
                        // Adding student score on death
                        score = score + listOfStudents[i].score;
                        console.log(score);
                        checkScore();
                    }
                }
                if (listOfStudents[i].type == 'special') {
                    if ((this.x >= listOfStudents[i].x && this.x <= listOfStudents[i].x + 10) && (this.y >= listOfStudents[i].y && this.y <= listOfStudents[i].y + 5) && listOfStudents[i].alive) {
                        listOfStudents[i].die();
                        this.erase();
                        this.y = 0;
                        score = score + listOfStudents[i].score;
                        console.log(score);
                        checkScore();
                    }
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
        if (this.type == 'student') {
            this.erase();
            //console.log(this.x);
            this.y = this.y + 2;
            this.draw();
            //console.log(this.y);
            if ((this.x >= teacher.x) && (this.x <= teacher.x + 20) && (this.y >= teacher.y) && (this.y <= teacher.y + 10)) {
                teacher.die();
                this.y = 140;
                this.erase();
            }
            if (this.y >= 138) {
                this.erase();
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
        var projectile = new Projectile(this.context, this.x, this.y, 'teacher');
        setInterval(function () {
            projectile.travel();
        }, 20)
    }
    explode() {
        this.erase();
        var repetitions = 0;
        var ctx = this.context;
        var explosionX = this.x;
        var explosionY = this.y;
        var intervalId = setInterval(function () {
            ctx.fillStyle = 'red';
            ctx.fillRect(explosionX - 1, explosionY - 1, 22, 11);
            setTimeout(function () {
                ctx.fillStyle = 'yellow';
                ctx.fillRect(explosionX - 1, explosionY - 1, 22, 11);
            }, 5);
            if (++repetitions == 50) {
                window.clearInterval(intervalId);
                //console.log('Explosion finished.');
                setTimeout(function () {
                    ctx.fillStyle = 'white';
                    ctx.fillRect(explosionX - 1, explosionY - 1, 22, 11);
                }, 100);
            }
        }, 20)
    }

    // Teacher death method - killed, lives decrements. When lives is 0, game over.

    die() {
        if (this.alive) {
            this.alive = true;
            this.explode();
            console.log('Teacher killed.');
            this.lives = this.lives - 1;
            console.log('Lives left: ' + this.lives);
            if (this.lives >= 1) {
                this.x = 140;
                this.y = 130;
                this.draw();
            }
            // TO IMPLEMENT - game over state
            if (!this.lives) {
                console.log('Game over');
            }
        }
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

    // Methods that coordinates students' projectiles. Randomly choses a student from the front row. If no student is available on that line, another student will be chosen. Only student in front row shoot.

    function studentAI() {
        setInterval(function () {
            var choice = Math.floor(Math.random() * (frontStudents.length))
            while (!frontStudents[choice].alive) {
                choice = Math.floor(Math.random() * (frontStudents.length))
            }
            //console.log('Selected student number: ' + choice);
            frontStudents[choice].fire();
        }, 2000)
    }

    //Initiate teacher location
    teacher = new Teacher(ctx, 140, 130, true, 3);

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

    //Draw the teacher
    teacher.draw();

    // Initiating the score with 0.
    score = 0;
    previousScore = 0;

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

    studentAI();


    for (var i = 0; i < listOfStudents.length; i++) {
        //listOfStudents[i].move();

        //console.log(listOfStudents[i].side + ' ' + listOfStudents[i].row + ' ' + listOfStudents[i].line);
    }

    var specialStudent = new Student(ctx, 143, 20, null, null, null, true, 'special', 100);
    //specialStudent.draw();
    //specialStudent.erase();
    listOfStudents.push(specialStudent);
    specialStudent.move();

    //listOfStudents[listOfStudents.length - 4].fire();
    //console.log(frontStudents);




}