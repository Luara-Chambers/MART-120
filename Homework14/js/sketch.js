// player
var playerX = 300;
var playerY = 50;
// movement for player
var w = 87;
var s = 83;
var a = 65;
var d = 68;
// shapes
var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];
// custom shape
var customshapeX;
var customshapeY;
// functions
function setup(){
  createCanvas(600,600);
  //random shape speed
  for (var i = 0; i < 6; i++) {
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
    shapeXs[i] = getRandomNumber(600);
    shapeYs[i] = getRandomNumber(600);
    diameters[i] = getRandomNumber(25);
  }
}
// background functions
function draw()
{
  background (175,60,90);
  createBorders();
  createPlayer();
  playerMovement();
  playerVictory();
  createCustom();

  //projectiles
    fill(256,0,0);
    for (var i = 0; i < 600; i++) {
      circle(shapeXs[i], shapeYs[i], diameters[i]);
      shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 7))+1);
      //movement
      shapeXs[i] += shapeXSpeeds[i];
      //out of bounds
      if (shapeXs[i] > 600) {
          shapeXs[i] = 0;
      }
      if (shapeXs[i] < 0) {
          shapeXs[i] = 600;
      }
    }
}
function createPlayer()
{
  //player
    fill(0,0,200);
    circle(playerX,playerY,30);
}
function createBorders()
{
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
}
function playerMovement()
{
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
}
function playerVictory()
{
  //victory
    if(playerX > 250 && playerX < 350 && playerY > 550)
    {
      fill(0)
      stroke(5)
      textSize(30)
      text("Congratulations!", 200,50);
    }
}
function createCustom()
{
  //custom shape
    fill(256,100,100);
    circle(customshapeX,customshapeY, 20);
}
function mouseClicked()
{
    customshapeX = mouseX;
    customshapeY = mouseY;
}
//Random number
function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 10;
}
