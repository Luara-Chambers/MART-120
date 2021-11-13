// player
var playerX = 300;
var playerY = 50;
// movement for player
var w = 87;
var s = 83;
var a = 65;
var d = 68;
// first shape
var firstshapeX = 300;
var firstshapeY = 200;
var firstshapeXSpeed;
var firstshapeYSpeed;
// second shape
var secondshapeX = 300;
var secondshapeY = 250;
var secondshapeXSpeed;
var secondshapeYSpeed;
// third shape
var thirdshapeX = 300;
var thirdshapeY = 300;
var thirdshapeXSpeed;
var thirdshapeYSpeed;
// fourth shape
var fourthshapeX = 300;
var fourthshapeY = 350;
var fourthshapeXSpeed;
var fourthshapeYSpeed;
// fifth shape
var fifthshapeX = 300;
var fifthshapeY = 400;
var fifthshapeXSpeed;
var fifthshapeYSpeed;
// sixth shape
var sixthshapeX = 300;
var sixthshapeY = 450;
var sixthshapeXSpeed;
var sixthshapeYSpeed;
// custom shape
var customshapeX;
var customshapeY;
// functions
function setup()
{
  createCanvas(600,600);
  // first speed
  firstshapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  firstshapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  // second speed
  secondshapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  secondshapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  // third speed
  thirdshapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  thirdshapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  // fourth speed
  fourthshapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  fourthshapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  // fifth speed
  fifthshapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  fifthshapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  // sixth speed
  sixthshapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
  sixthshapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
}
// background functions
function draw()
{
  background (175,60,90);
  strokeWeight(10);
  line(0,5,600,5);
  line(5,0,5,600);
  line(595,0,595,600);
  line(0,595,250,595);
  line(350,595,600,595);
  line(250,600,250,550);
  line(350,600,350,550);
//goal
  fill(0,100,0);
  strokeWeight(0);
  rect(250,550,100,50);
  fill(256,256,256);
  textSize(18);
  text("Goal!",275,580);
//player
  fill(0,0,256);
  circle(playerX,playerY,30);
//movement
if(keyIsDown(w))
{
  playerY -= 5;
}
if(keyIsDown(s))
{
  playerY += 5;
}
if(keyIsDown(a))
{
  playerX -= 5;
}
if(keyIsDown(d))
{
  playerX += 5;
}
//projectiles
  fill(256,0,0);
  circle(firstshapeX, firstshapeY, 20);
  circle(secondshapeX, secondshapeY, 20);
  circle(thirdshapeX, thirdshapeY, 20);
  circle(fourthshapeX, fourthshapeY, 20);
  circle(fifthshapeX, fifthshapeY, 20);
  circle(sixthshapeX, sixthshapeY, 20);
  firstshapeX += firstshapeXSpeed;
  secondshapeX += secondshapeXSpeed;
  thirdshapeX += thirdshapeXSpeed;
  fourthshapeX += fourthshapeXSpeed;
  fifthshapeX += fifthshapeXSpeed;
  sixthshapeX += sixthshapeXSpeed;
  if(firstshapeX > 600)
  {
    firstshapeX = 0;
  }
  if(secondshapeX > 600)
  {
    secondshapeX = 0;
  }
  if(thirdshapeX > 600)
  {
    thirdshapeX = 0;
  }
  if(fourthshapeX > 600)
  {
    fourthshapeX = 0;
  }
  if(fifthshapeX > 600)
  {
    fifthshapeX = 0;
  }
  if(sixthshapeX > 600)
  {
    sixthshapeX = 0;
  }
//victory
  if(playerX > 250 && playerX < 350 && playerY > 550)
  {
    fill(0)
    stroke(5)
    textSize(30)
    text("Congratulations!", 200,50);
  }
//custom shape
  fill(256,0,0);
  circle(customshapeX,customshapeY, 20);
}
  function mouseClicked()
  {
    customshapeX = mouseX;
    customshapeY = mouseY;
}
