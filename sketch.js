var bg, bgCreate, balloon, balloonAni;

function preload(){
    bg = loadImage('/assets/bg.png');
    balloonAni = loadAnimation('/assets/balloon1.png','assets/balloon2.png', 'assets/balloon3.png');
}

function setup(){
    createCanvas(400,400);


    balloon = createSprite(100,150,10,10);
    balloon.addAnimation("balloonAni", balloonAni);
    balloon.scale = .3;
}

function draw(){
    background(bg);
    
    if(keyDown("space")){
        balloon.velocityY = -5;
    }

    balloon.velocityY += 0.8;

    drawSprites();
}