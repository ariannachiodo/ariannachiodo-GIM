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
  
  let centerX = width/2;
  let centerY = height/2;
  
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
    translate(centerX, centerY - height/4);
    fill(255);
    rect(-75,-110,150,5,2.5);
    fill(255);
    
    translate(-55,-105);
    if (h % 2 == 0) {
      rotate(hr_rotation);
    }
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    if (h % 2 == 0) {
      rotate(-hr_rotation);
    }
    
    translate(40,0);
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    fill(0);
    
    fill(255);
    
    translate(40,0);
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    fill(0);
    
    fill(255);
    
    translate(40,0);
    if (h % 2 == 1) {
      rotate(-hr_rotation);
    }
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    if (h % 2 == 1) {
      rotate(hr_rotation);
    }
  pop();
  
  // draw minutes
  push();
    translate(centerX, centerY);
    fill(255);
    rect(-75,-110,150,5,2.5);
    fill(255);
    
    translate(-55,-105);
    if (m % 2 == 0) {
      rotate(min_rotation);
    }
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    if (m % 2 == 0) {
      rotate(-min_rotation);
    }
    
    translate(40,0);
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    fill(0);
    
    fill(255);
    
    translate(40,0);
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    fill(0);
   
    fill(255);
    
    translate(40,0);
    if (m % 2 == 1) {
      rotate(-min_rotation);
    }
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    if (m % 2 == 1) {
      rotate(min_rotation);
    }
  pop();
  
  // draw seconds
  push();
    translate(centerX, centerY + height/4);
    fill(255);
    rect(-75,-110,150,5,2.5);
    fill(255);
    
    translate(-55,-105);
    if (s % 2 == 0) {
      rotate(sec_rotation);
    }
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    if (s % 2 == 0) {
      rotate(-sec_rotation);
    }
    
    translate(40,0);
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    fill(255);
    
    fill(255);
    
    translate(40,0);
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    fill(255);
   
    fill(255);
    
    translate(40,0);
    if (s % 2 == 1) {
      rotate(-sec_rotation);
    }
    rect(-1,0,2,200);
    ellipse(0, 200, 45, 45);
    if (s % 2 == 1) {
      rotate(sec_rotation);
    }
  pop();
}