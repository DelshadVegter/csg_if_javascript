var diameter = 300;
var Y1 = 0;
var Y2 = 450;
function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255,255,255,1);
  fill(255,0,0,0.5);
  Y1+=5;
  Y2-=5;
  ellipse(width / 2,height / 2,diameter);

    ellipse(width / 2,Y1,diameter);

      ellipse(width / 2,Y2,diameter);
}