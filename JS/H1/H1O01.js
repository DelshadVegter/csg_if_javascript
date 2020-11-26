function setup() {
  canvas = createCanvas(450,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // cirkel moment
  
  stroke('green');
  strokeWeight(50);
  fill('white');
  ellipse(225,225,350);
  
//vierkant moment
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);  
}
