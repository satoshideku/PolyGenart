let h = 30;
let num = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	background(100);
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function draw() {
	fill(0, 0, 0, 50);
	rect(0, 0, width, height);
	stroke('white');
	translate(windowWidth/2, windowHeight/2+h*num/4);
	draw_(num, radians((frameCount/3)%360));
}

function draw_(cnt, angle){
	polygon(0, 0, -h, TWO_PI%angle);
	translate(0, -h);
	if(cnt>0){
		cnt--;
		push();
		rotate(-angle);
		draw_(cnt, angle);
		pop();
		push();
		rotate(angle);
		draw_(cnt, angle);
		pop();
	}
}