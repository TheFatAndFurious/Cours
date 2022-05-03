//Série A
/*
//A1 initialisation
setPos(300,300);
faceDown();
changeColor(color.red);
setLineWidth(10);

//A1 réalisation
forward(200);

faceRight();
forward(100);

//A2 init
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);


//A2 réalisation
faceLeft();
forward(100);

faceDown();
forward(100);

faceRight();
forward(200);

faceUp();
forward(200);


//A3 init
setPos(300,300);
faceLeft();
changeColor(color.brown);
setLineWidth(10);

//A3 réalisation
forward(100);

faceRight();
forward(200);

faceLeft();
forward(100);

faceUp();
forward(100);

faceDown();
forward(200);


//A4 init
setPos(200,450)
faceRight();
changeColor(color.green);
setLineWidth(10);

//A4 réalisation
forward(200);

arcLeft(100,180);
forward(100);

arcRight(100,180);
forward(200);


//A5 init
setPos(300,100);
changeColor(color.red)
faceRight();
setLineWidth(10);

//A5 réalisation
arcRight(200,180);
arcRight(100,180);
arcLeft(100,180);
arcLeft(200,180);



//A6 init
setPos(300,400);
setLineWidth(10);
changeColor(color.blue);
faceUp();

//A6 réalisation
forward(100);
up();
forward(100);
down();
forward(200);


//A7 init
setPos(200,300);
setLineWidth(10);
changeColor(color.green)
faceDown()

 //A7 réalisation
 forward(200);
 arcLeft(100,180);
 forward(100);
 up();
 forward(100);
 down();
 forward(200);
 arcLeft(100,180);
 forward(100);
 

 //A8 init
 faceUp();
 changeColor(color.fuschia);
 setLineWidth(10);
 setPos(300,300);

 //A8 réalisation
 forward(100);
 faceRight();
 forward(200);
 faceDown();
 forward(400);
 faceLeft();
 forward(100);
 up();
 forward(100);
 faceUp();
 forward(100);
 down();
 forward(100);

 

 //A9 init
 setPos(100,400);
 changeColor(color.blue);
 faceRight();
 setLineWidth(10);

 //A9 réalisation
 arcLeft(100,180);
 arcRight(100,180);
 forward(400);
 arcRight(100,180);
 arcLeft(100,180);
 faceLeft();
 forward(400);
 

 //A10 init
 setPos(300,300);
 changeColor(color.red);
 faceRight();
 setLineWidth(10);

 //A10 réalisation
 arcLeft(100,180);
 changeColor(color.green);
 arcLeft(200,180);
 changeColor(color.yellow);
 arcLeft(300,180);


//A11 init
changeColor(color.blue);
setLineWidth(10);
faceUp();
setPos(100,200);

//A11 réalisation
arcRight(100,180);
faceRight();
up();
forward(100);
faceUp();
down();
arcRight(100,180);
up();
faceLeft();
forward(50);
faceDown();
forward(100);
down();
changeColor(color.red);
arcRight(200,180);


//A12 init
setPos(50,200);
setLineWidth(10);
changeColor(color.green);
faceUp();

//A12 réalisation
arcRight(100,180);
forward(200);
arcLeft(100,180);
faceRight();
up();
forward(100);
down();
faceDown();
changeColor(color.red);
arcLeft(100,180);
forward(200);
arcRight(100,180);



//Série B

//B2 init
setPos(100,300);
setLineWidth(10);
changeColor(color.red);
faceUp();

//B2 réalisation
for(let i=0; i<4; i++) {
    forward(100);
    faceRight();
    forward(100);
    faceDown();
    forward(100);
    faceRight();
    forward(100);
    faceUp();
}

//B3 init
setPos(200,200);
changeColor(color.red);
faceRight();
setLineWidth(10);

//B3 réalisation
for(let i=0; i<4; i++){
    forward(200);
    right(90);

}

//B4 init
setPos(100,400);
setLineWidth(10);
changeColor(color.blue);
faceRight();

//B4 réalisation
for(let i=0; i<3; i++){
    forward(200);
    left(120); 
}


//B5 init
setPos(300,300);
setLineWidth(10);
changeColor(color.brown);
faceUp();

//B5 réalisation
forward(200);
changeColor(color.red);

for(let i=0; i<3; i++){
    forward(100);
    right(120);
}


//B6 init
faceRight();
setLineWidth(10);
changeColor(color.red);
setPos(100,300);

//B6 réalisation
for(let i=0; i<2; i++){
    forward(100);
    faceUp();
    forward(100);
    faceRight();
}
changeColor(color.green);

for(let i=0; i<3; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


//B7 init
setPos(200,200);
setLineWidth(10);
changeColor(color.brown);
faceRight();

//B7 réalisation
for(let i=0; i<3; i++){
    forward(200);
    left(120);
}

for(let i=0; i<4; i++){
    forward(200);
    right(90);
}

//B8 init
faceRight();
setPos(200,200);
setLineWidth(10);
changeColor(color.yellow)

//B8 réalisation
for(let i=0; i<8; i++){
    forward(400);
    right(135);
}



//B9 init
faceRight();
changeColor(color.fuschia);
setPos(100,200);
setLineWidth(10);

//B9 réalisation
forward(100);
up();
forward(100);
down();

for(let i=0; i<3; i++){
    forward(200);
    right(120);
}

//B10 init
faceRight();
changeColor(color.blue);
setLineWidth(10);
setPos(10,200);

//B10 réalisation
for(let i=0; i<8; i++){
    forward(200);
    right(135);
}
up();
forward(400);
down();
changeColor(color.yellow);

for(let i=0; i<8; i++){
    forward(400);
    left(135);
}

right(90);
up();
forward(200);
down();
changeColor(color.red);

for(let i=0; i<8; i++){
    forward(200);
    right(135);
}

//B11 init
faceRight();
changeColor(color.red);
setPos(200,200);
setLineWidth(10);

//B11 réalisation
for(let i=0; i<4; i++){
    forward(100);
    left(90);
    forward(100);
    right(90);
    forward(100);
    right(90);
}


//B12 init
setPos(200,200);
faceRight();
setLineWidth(10);
changeColor(color.red);


//B12 réalisation
for(let i=0; i<3; i++){
    right(90);
    forward(100);
}

up();
forward(100);
down();
changeColor(color.green)

for(let i=0; i<3; i++){
    forward(100);
    right(90);
}


//B13 init
faceRight();
changeColor(color.green);
setLineWidth(10);
setPos(200,200);

//B13 réalisation
for(let i=0; i<10; i++){
    forward(100);
    left(135);
    forward(50);
    right(90);
    forward(50);
    right(90);
}

//B14 init
faceRight();
changeColor(color.yellow);
setLineWidth(10);
setPos(100,100);

//B14 réalisation
forward(100);

for(let i=0; i<6; i++){
    right(120);
    forward(200);
    left(120);
    forward(200);
}

//B15 init
faceRight();
changeColor(color.red);
setLineWidth(10);
setPos(300,400);

//B15 réalisation
for(let i=0; i<4; i++){
    forward(200);
    arcLeft(100,90);
}


//B16 init
faceRight();
changeColor(color.green);
setLineWidth(10);
setPos(100,400);

//B16 réalisation
arcLeft(400,90);

for(let i=0; i<4; i++){
    faceLeft();
    arcLeft(50,90);
    arcRight(50,90);
}

//B17 init
setPos(100,450);
setLineWidth(5);
faceRight();
changeColor(color.blue);

//B17 réalisation
for(let i=0; i<6; i++){
    arcLeft(100,180);
    left(120);
}


//B18 init
faceRight();
changeColor(color.yellow);
setPos(100,500);
setLineWidth(5);

//B18 réalisation
for(let i=0; i<8; i++){
    forward(400);
    left(90);
    forward(100);
    left(45);
}

//B19 init
faceRight();
setLineWidth(5);
setPos(250,500);
changeColor(color.blue);

//B19 réalisation
for(let i=0; i<4; i++){
    arcLeft(100,180);
    faceRight();
}

up();
faceUp();
forward(100);
down();

for(let i=0; i<4; i++){
    faceLeft();
    arcLeft(100,180);
}

//B20 init
faceDown();
changeColor(color.blue);
setPos(100,300);
setLineWidth(5);

//B20 réalisation
for(let i=0; i<2; i++){
    forward(200);
    arcLeft(100,90);
}

forward(200);
forward(100);
arcLeft(100,90);
forward(200);
arcLeft(100,90);
forward(100);
faceRight();
forward(400);
faceLeft();
forward(200);
faceDown();
up();
forward(50);
faceLeft();
down();
arcLeft(100,360);

//B23 init
faceUp();
changeColor(color.red);
setPos(50,350);
setLineWidth(10);

//B23 réalisation
right(45);
for(let i=0; i<3; i++){
    forward(100);
    right(90);
    forward(100);
    left(90);
}
right(135);
forward(100);
right(45);

for(let i=0; i<3; i++){
    forward(100);
    right(90);
    forward(100);
    left(90);
}
faceUp();
forward(100);

//Série C

//C1 init
faceRight();
changeColor(color.blue);
setPos(50,250);
setLineWidth(10);

//C1 réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<3; j++){
        forward(200);
        right(120);
    }
    forward(200);
}

//C2 init
faceUp();
changeColor(color.red);
setPos(250,550);
setLineWidth(5);

//C2 réalisation
for(let i=0; i<5; i++){
    for(let j=0; j<4; j++){
        forward(100);
        right(90);
    }
    up();
    forward(200);
    down();
}

//C3 init
faceRight();
setPos(20,350);
setLineWidth(5);
changeColor(color.green)

for(let i=0; i<3; i++){
    for(let j=0; j<8; j++){
        forward(100);
        left(135);
    }
    up();
    forward(200);
    down();
    shiftColor(2);

}


//C4 init
faceRight();
changeColor(color.red);
setPos(5,300);
setLineWidth(5);

//C4 réalisation
for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
    forward(100);
    left(120);
}
changeColor(color.orange);
for(let k=0; k<4; k++){
    forward(100);
    right(90);
}
up();
forward(200);
down();
changeColor(color.red);
}

//C5 init
setPos(300,300);
setLineWidth(5);
changeColor(color.yellow);
faceRight();

//C5 réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<8; j++){
        forward(200);
        left(135);
    }
    shiftColor(1);
    right(90);
}

//C6 init
faceRight();
setPos(300,400);
setLineWidth(10);
changeColor(color.yellow);

//C6 réalisation
for(let i=0; i<3; i++){
    for(let j=0; j<4; j++){
        forward(200);
        left(120);
    
    }
    forward(200);
}

//C7 init
faceRight();
setPos(200,400);
setLineWidth(5);
changeColor(color.blue);

//C7 réalisation
for(let i=0; i<8; i++){
    for(let j=0; j<4; j++){
        forward(100);
        right(120);
    }
    left(165);
}


//D9 init
setPos(300,350);
setLineWidth(15);
changeColor(color.blue);
faceRight();

//D9 réalisation
let long
long = 50
for(let i=0; i<6; i++){
    forward(long);
    right(120);
    long += 50;
}


//D10 init
faceRight();
changeColor(color.green);
setPos(300,300);
setLineWidth(5);

//D10 réalisation
let long = 40
for(let i=0; i<60; i++){
    forward(long);
    right(90);
    long += 10
}


//D11 init
faceRight();
setPos(10,300);
setLineWidth(5);
changeColor(color.green);

//D11 réalisation
let long = 250
for(let i=0; i<5; i++){
    for(let j=0; j<4; j++){
        forward(long);
        left(120);
    }
    right(120);
    long -= 50;
}


//D12 init
faceRight();
changeColor(color.blue);
setPos(300,300);
setLineWidth(8);

//D12 réalisation
let long = 80;
for(let i=0; i<6; i++){
    for(let j=0; j<4; j++){
        forward(long);
        left(120);
    }
    right(60);
    long += 30
}
*/

//Serie E
//E1 init
faceRight();
setPos(5,300);
setLineWidth(5);
changeColor(color.red);

//E11 réalisation

for(let i=0; i<5; i++){
    forward(150);
    right(144);
}













