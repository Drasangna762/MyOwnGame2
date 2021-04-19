var bg
var bgImage;
score = 0;
function preload(){
bgImage = loadImage("bg.jpg") 
alienImage= loadImage("images.jpg")
alienImage2 = loadImage("MiddleAlien.png")
alienImage3 = loadImage("BigAlien.png")
lasergunner = loadImage("Lasergunner.png")
bulletImage = loadImage("2.png")
}

function setup(){
createCanvas(900,500)
bg = createSprite(450,250)
bg.addImage(bgImage)
bg.scale = 1.5
laser = createSprite(55,410)
laser.addImage(lasergunner)

bulletGroup = new Group();
alien1Group = new Group();
alien2Group = new Group();
alien3Group = new Group();

laser.scale = 0.2
}

function draw(){
background("black")
textSize(20)
fill("white")  
text("Score"+score,500,200)
if (keyDown("up")){
laser.y = laser.y-8


}
if (keyDown("down")){
laser.y = laser.y+8

}

if (keyDown("space")&&frameCount%20===0){
bullets()


}
if (bulletGroup.isTouching(alien1Group)){
alien1Group.destroyEach()
score = score+1

}
if (bulletGroup.isTouching(alien2Group)){
    alien2Group.destroyEach()
    score = score+1
    
    }
    if (bulletGroup.isTouching(alien3Group)){
        alien3Group.destroyEach()
        score = score+1
        
        }
alien1()
alien2()
alien3()
drawSprites();
}
function alien1(){
    if(frameCount%120===0){
        alien = createSprite(900,50)
        alien.velocityX = -2
        alien.y = Math.round(random(50,350))
        alien.addImage(alienImage)
        alien.scale=0.1
        alien1Group.add(alien)
    }
}
function alien2(){
    if(frameCount%150===0){
        alien = createSprite(900,50)
        alien.velocityX = -2
        alien.y = Math.round(random(50,350))
        alien.addImage(alienImage2)
        alien.scale=0.2
        alien2Group.add(alien)
    }
}
function alien3(){
    if(frameCount%200===0){
        alien = createSprite(900,50)
        alien.velocityX = -2
        alien.y = Math.round(random(50,350))
        alien.addImage(alienImage3)
        alien.scale=0.1
        alien3Group.add(alien)
    }
}

function bullets(){

bullet = createSprite(90,350)    
bullet.addImage(bulletImage)
bullet.scale = 0.1
bullet.velocityX = 3
bullet.x = laser.x
bullet.y = laser.y
bulletGroup.add(bullet)
}


