var listOfStudents = [];
function initiateCanvas(){
    var canvas = document.getElementById("my-canvas");
    var ctx = canvas.getContext('2d');
    var canvasInfo = canvas.getBoundingClientRect();
    console.log(canvasInfo.height);
    console.log(canvasInfo.width);

    function clearCanvas() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvasInfo.height, canvasInfo.width);
    }

    var teacher = {
        x: 140,
        y: 130,
        color: 'black',
        draw: function() {
            ctx.fillStyle = 'black';
            ctx.fillRect(this.x, this.y, 20, 10);
        },
        erase: function() {
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x, this.y, 20, 10);
        },
        moveRight: function() {
            this.erase();
            ctx.fillStyle = 'black';
            this.x = this.x + 5;
            ctx.fillRect(this.x, this.y, 20, 10);
        },
        moveLeft: function() {
            this.erase();
            ctx.fillStyle = 'black';
            this.x = this.x - 5;
            ctx.fillRect(this.x, this.y, 20, 10);
        },
        fire: function() {
             var projectile  = {
                 projectileX: this.x + 9,
                 projectileY: this.y - 8,
                 drawProjectile: function() {
                     ctx.fillStyle = 'black';
                     ctx.fillRect(this.projectileX, this.projectileY, 1, 2)

                 },
                 eraseProjectile: function() {
                     ctx.fillStyle = 'white';
                     ctx.fillRect(this.projectileX, this.projectileY, 1, 2);
                 },
                 travel: function() {
                     //console.log(this.projectileY);
                     for (var i = 0; i < listOfStudents.length; i++) {
                        //console.log(this.projectileY);
                        //console.log(listOfStudents[i].y);
                        //console.log(this.projectileX);
                        //console.log(listOfStudents[i].x);
                        if (this.projectileX == listOfStudents[i].x + 3 && this.projectileY == listOfStudents[i].y + 6) {
                            console.log('Target hit');
                            listOfStudents[i].die();
                        }
                    }
                     if (this.projectileY <= 10) {
                         this.eraseProjectile();
                     }
                     else {
                        this.eraseProjectile();
                        this.projectileY = this.projectileY - 2;
                        this.drawProjectile();
                     }
                     
                 }  
             }
             //projectile.drawProjectile();
             setInterval(function() {
                 projectile.travel();
                 //console.log(projectile.projectileX);
                 //console.log(projectile.projectileY);
                 //projectile.drawProjectile();
             }, 20)
         }
    }

    window.addEventListener('keydown', function(e) {
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

    teacher.draw();

    var student = {
        x: 146,
        y: 70,
        color: 'black',
        draw: function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, 7, 7);
        },
        erase: function() {
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x, this.y, 7, 7);
        },
        explode: function(explodeX, explodeY) {
            this.erase();
            var repetitions = 0;
            var intervalId = setInterval(function() {
                ctx.fillStyle = 'red';
                ctx.fillRect(explodeX - 1, explodeY - 1, 9, 9);
                setTimeout(function(){
                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(explodeX - 1, explodeY - 1, 9, 9);
                }, 5);
                if (++repetitions == 50) {
                    window.clearInterval(intervalId);
                    console.log('Explosion finished.');
                    
                    setTimeout(function() {
                        ctx.fillStyle = 'white';
                        ctx.fillRect(explodeX - 1 ,explodeY - 1, 9, 9);
                    }, 100);
                    
                }
            }, 20)
        },
        die: function() {
            this.explode(this.x, this.y);
            console.log('Student is dying.')
        }
    }

    console.log(listOfStudents);
    listOfStudents.push(student);
    console.log(listOfStudents);
    console.log(listOfStudents[0].y)
    student.draw();

    var student1 = Object.assign({}, student)
    student1.x = 146;
    student1.y = 100;
    listOfStudents.push(student1);
    student1.draw();

    var student2 = Object.assign({}, student)
    student2.x = 186;
    student2.y = 100;
    listOfStudents.push(student2);
    student2.draw();

    console.log(listOfStudents);

    student2.move = function() {
        this.erase();
        ctx.fillStyle = 'black';
        this.x = this.x + 10;
        this.draw();
    }

    setInterval(function(){
        student2.move();
        setTimeout(function(){
            student2.erase();
            ctx.fillStyle = 'black';
            student2.x = student2.x - 10;
            student2.draw();
        }, 250)
    }, 500)

    console.log(student2); 

    //Remember to delete object entirely after death.

    //clearCanvas();
    //teacher.fire();

}