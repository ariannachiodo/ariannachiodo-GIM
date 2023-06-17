
// Inspired by a coding challange by Daniël Shiffman, The Coding Train
// see: https://www.youtube.com/watch?v=E4RyStef-gY

let amplitude;

function setup() {
  createCanvas(windowWidth, windowHeight);
   noStroke();
   amplitude = 0.5;
   textAlign(CENTER);
   textSize(75);
}

function draw() {
  background(0);
  
  scale(0.5);
  let h = hour();
  let m = minute();
  let s = second();
	tempDate = new Date();
  let ms = tempDate.getMilliseconds();
  let hr_rotation = amplitude * sin((PI/60)*(m+s/60.0));
  let min_rotation = amplitude * sin((PI/60)*(s+ms/1000.0));
  let sec_rotation = amplitude * sin((PI/1000)*ms);
  
  // draw hours
  push();
    translate(width,height-height/1.5);
    fill(255);
    rect(-175,-220,350,10,5);
    fill(255);
    
    translate(-135,-210);
    if (h % 2 == 0) {
      rotate(hr_rotation);
    }
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    if (h % 2 == 0) {
      rotate(-hr_rotation);
    }
    
    translate(90,0);
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    fill(0);
    
    fill(255);
    
    translate(90,0);
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    fill(0);
    
    fill(255);
    
    translate(90,0);
    if (h % 2 == 1) {
      rotate(-hr_rotation);
    }
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    if (h % 2 == 1) {
      rotate(hr_rotation);
    }
  pop();
  
  // draw minutes
  push();
    translate(width,height);
    fill(255);
    rect(-175,-220,350,10,5);
    fill(255);
    
    translate(-135,-210);
    if (m % 2 == 0) {
      rotate(min_rotation);
    }
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    if (m % 2 == 0) {
      rotate(-min_rotation);
    }
    
    translate(90,0);
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    fill(0);
    
    fill(255);
    
    translate(90,0);
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    fill(0);
   
    fill(255);
    
    translate(90,0);
    if (m % 2 == 1) {
      rotate(-min_rotation);
    }
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    if (m % 2 == 1) {
      rotate(min_rotation);
    }
  pop();
  
  // draw seconds
  push();
    translate(width,height+height/1.5);
    fill(255);
    rect(-175,-220,350,10,5);
    fill(255);
    
    translate(-135,-210);
    if (s % 2 == 0) {
      rotate(sec_rotation);
    }
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    if (s % 2 == 0) {
      rotate(-sec_rotation);
    }
    
    translate(90,0);
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    fill(255);
    
    fill(255);
    
    translate(90,0);
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    fill(255);
   
    fill(255);
    
    translate(90,0);
    if (s % 2 == 1) {
      rotate(-sec_rotation);
    }
    rect(-1,0,2,400);
    ellipse(0, 400, 90, 90);
    if (s % 2 == 1) {
      rotate(sec_rotation);
    }
  pop();
}