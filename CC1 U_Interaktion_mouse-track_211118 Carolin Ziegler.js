function draw() {
  fill(39, 35, 40);
  circle(mouseX, mouseY, 10, 10);
}

function Horns(x, y) {
  //Devilhorns
  fill(83, 49, 120); //darkpurple
  noStroke();
  triangle(165, 115, 100, 105, 100, 184); //HornL
  triangle(240, 115, 300, 105, 300, 184); //HornR
  triangle(100, 105, 100, 184, 55, 125); //L
  triangle(300, 105, 300, 184, 345, 125); //R
  triangle(40, 70, 55, 125, 100, 105); //L
  triangle(360, 70, 345, 125, 300, 105); //R
  console.log("Devilhorns");
}

function Head(x, y) {
  //Devilhead
  fill(138, 75, 166); //purple
  circle(200, 200, 220);
  console.log("Devilhead");
}

function Smile(x, y) {
  //Devilsmile

  fill(39, 35, 43); //black
  circle(200, 220, 120);
  fill(138, 75, 166); //purple
  circle(200, 205, 120);
  console.log("Devilsmile");
}

function Eyes(x, y) {
  //Devileyes
  fill(39, 35, 43);
  ellipse(165, 200, 20, 40); //EyeL
  ellipse(235, 200, 20, 40); //EyeR
  triangle(180, 185, 155, 180, 150, 170); //EyebrowL
  triangle(155, 180, 150, 170, 140, 165);
  triangle(220, 185, 245, 180, 250, 170);
  triangle(245, 180, 250, 170, 260, 165); //EyebrowR
  triangle(140, 165, 155, 180, 130, 175);
  triangle(260, 165, 245, 180, 270, 175);
  console.log("Devileyes");
}

function Speech(x, y) {
  //Speechbubble
  fill(255, 255, 255); //white
  ellipse(450, 130, 190, 120);
  triangle(345, 181, 364, 142, 398, 169);
  fill(23, 25, 28); //black
  text("Wir sehen uns", 410, 110);
  text("in der Hölle wieder!", 400, 140);
  console.log("Speechbubble");
}

Horns();
Head();
Smile();
Eyes();
Speech();
