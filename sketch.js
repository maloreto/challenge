var x = [];
var y = [];
var i = 0;
var c;

function setup () {
  createCanvas (windowWidth, windowHeight);
  c = color(255,204,0);
}

function draw (){
  background (0);
    for (var i = 0; i < x.length; i++) {
    ellipse (x[i], y[i], 20,20);
    y[i]++;
  }
}

function mousePressed (){
  fill (c);
  x.push(mouseX);
  y.push(mouseY);
}