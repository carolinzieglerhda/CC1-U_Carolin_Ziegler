let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  background(250);
}

function draw() {
  x = mouseX;
  y = mouseY;
  if (mouseIsPressed === true) {
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    fill(0);
    circle(mouseX, mouseY, 1, 1);
  }
}
