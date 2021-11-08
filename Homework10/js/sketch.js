var headX = 240;
var headY = 240;
var headDirection = 0.5;

var righthandX = 191;
var righthandY = 350;
var righthandDirection = 3;

var lefthandX = 291;
var lefthandY = 350;
var lefthandDirection = 4;

var rightfootX = 171;
var rightfootY = 540;
var rightfootDirection = 5;

var leftfootX = 281;
var leftfootY = 540;
var leftfootDirection = 2;

var headSize = 100;
var nameSize = 22;
var count = 0;
var sizeDirection = 1;
var namesizeDirection = 1;
function setup()
{
  createCanvas(500,600);
}
function draw()
{
  background(255,105,0);
  // head
  fill(265,160,250);
  circle(headX,headY,headSize);
  headSize+=sizeDirection;
  if(headSize >= 105 || headSize <= 95)
  {
    sizeDirection *= -1;
  }

  headX+=headDirection;
  if(headX >= 340 || headX <= 140)
  {
    headDirection *= -1;
  }

  headY+=headDirection;
  if(headY >= 340 || headY <= 140)
  {
    headDirection *= -1;
  }
  // hair
  line(201,204,191,196);
  line(221,194,211,186);
  line(241,187,241,176);
  line(261,194,271,186);
  line(281,204,291,196);
  strokeWeight(5);
  // eyes
  point(230,230);
  point(250,230);
  // nose
  triangle(240,250,241,245,242,250);
  // mouth
  ellipse(240,265,20,10);
  // body
  line(241,290,241,450);
  line(191,350,291,350);
  // righthand
  circle(righthandX,righthandY,30);
  righthandX+=righthandDirection;
  if(righthandX >= 400 || righthandX <= 100)
  {
    righthandDirection *= -1;
  }
  // lefthand
  circle(lefthandX,lefthandY,30);
  lefthandY+=lefthandDirection;
  if(lefthandY >=600 || lefthandY <= 0)
  {
    lefthandDirection *= -1;
  }
  // legs
  line(241,450,191,550);
  line(241,450,291,550);
  // rightfoot
  circle(rightfootX,rightfootY,30);
  rightfootY+=rightfootDirection;
  if(rightfootY >= 600 || rightfootY <= 0)
  {
    rightfootDirection *= -1;
  }
  // leftfoot
  circle(leftfootX,leftfootY,30);
  leftfootX+=leftfootDirection;
  if(leftfootX >= 340 || leftfootX <= 140)
  {
    leftfootDirection *= -1;
  }
  // text
  textSize(nameSize);
  text("Happy Halloween!", 150,100);
  nameSize+= namesizeDirection;
  count++;
  if(count > 5)
  {
    namesizeDirection *=-1;
    count = 0;
  }
  text("Luara Chambers",150,50);
}
