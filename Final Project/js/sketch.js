function setup()
{
  createCanvas(600,600);
}
function draw()
{
  background(0,125,125);
  //star
  line(275,125,325,125);
  line(300,100,300,150);
  line(300,125,325,150);
  line(275,150,300,125);
  //tree
  line(150,350,275,150);
  line(325,150,450,350);
  line(150,350,450,350);
  //trunk
  line(275,350,275,400);
  line(325,350,325,400);
  line(275,400,325,400);
  //decorations
  fill(0,125,125);
  circle(240,315,20);
  circle(400,325,20);
  circle(300,300,20);
  circle(260,265,20);
  circle(355,275,20);
  circle(325,235,20);
  circle(275,200,20);
  // text
  textSize(20);
  fill(0,0,0);
  text("Merry Christmas", 225,50);
  text("Luara Chambers",225,500);
}
