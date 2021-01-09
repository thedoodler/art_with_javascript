
// Prandtl number
let a = 10;
// Rayleigh number
let b = 28;
// parameters
let c = 8/3;

let mag = 15;

let dt = 0.01;


function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));  return thecol;
}

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  colorMode(HSB);
  background(0);

  let s1 = createVector(1,10,0);
  let s2 = createVector(1,10,0);
  p1 = [];
  p2 = [];

}

function update(vec){

  x = vec.x;
  y = vec.y;
  z = vec.z;

  dx = (a * ( y - x )) * dt;
  dy = (x * ( b - z ) - y) * dt;
  dz = (x * y - c * z ) * dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;

  nx = x*mag;
  ny = y*mag;
  nz = z*mag;

  return p5.Vector(nx,ny,nz);
}

function setup(){
  pixelDensity(2);
  init();
}

function draw(){

  s1 = update(s1);
  s2 = update(s2);

  noFill();
  stroke(255);
  translate(ww/2,wh/2);
  console.log(x, y);
  points_array.push(new p5.Vector(nx,ny));

  let hu = 0
  beginShape();
  for (let point of points_array){
    stroke(hu,255,255);
    vertex(point.x,point.y);
    hu += 0.1;
    if (hu > 255){
      hu = 0;
    }
  }
  endShape();
  // point(nx,ny);
  // circle(mouseX,mouseY,100);
}
