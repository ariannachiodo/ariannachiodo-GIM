// Tweakable parameters
const ASTERISKS_PER_LAYER = 100;
const MAX_SIZE = 30;
const GRAVITY = 0.405;
const LAYER_COUNT = 5;

const ASTERISKS = [];

// Will run once when the sketch is opened
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Initialize the asterisks with random positions
  for (let l = 0; l < LAYER_COUNT; l++) {
    ASTERISKS.push([]);
    for (let i = 0; i < ASTERISKS_PER_LAYER; i++) {
      ASTERISKS[l].push({
        x: random(width),
        y: random(height),
        mass: random(0.75, 1.25),
        l: l + 1
      });
    }
  }
}

// Will run every frame (refreshes many times per second)
function draw() {
  background("rgb(112,114,148)");

  // Iterate through each asterisk to draw and update them
  for (let l = 0; l < ASTERISKS.length; l++) {
    const LAYER = ASTERISKS[l];

    for (let i = 0; i < LAYER.length; i++) {
      const asterisk = LAYER[i];
      const diameter = (asterisk.l * MAX_SIZE) / LAYER_COUNT;
      drawAsterisk(asterisk, diameter);
      updateAsterisk(asterisk, diameter);
    }
  }
}

// Helper function to draw an asterisk
function drawAsterisk(asterisk, diameter) {
  fill(255);
  beginShape();
  vertex(asterisk.x, asterisk.y - diameter / 2);
  vertex(asterisk.x + diameter / 4, asterisk.y - diameter / 4);
  vertex(asterisk.x + diameter / 2, asterisk.y - diameter / 4);
  vertex(asterisk.x + diameter / 4, asterisk.y);
  vertex(asterisk.x + diameter / 2, asterisk.y + diameter / 4);
  vertex(asterisk.x + diameter / 4, asterisk.y + diameter / 4);
  vertex(asterisk.x, asterisk.y + diameter / 2);
  vertex(asterisk.x - diameter / 4, asterisk.y + diameter / 4);
  vertex(asterisk.x - diameter / 2, asterisk.y + diameter / 4);
  vertex(asterisk.x - diameter / 4, asterisk.y);
  vertex(asterisk.x - diameter / 2, asterisk.y - diameter / 4);
  vertex(asterisk.x - diameter / 4, asterisk.y - diameter / 4);
  endShape(CLOSE);
}

// Helper function to prepare a given asterisk for the next frame
function updateAsterisk(asterisk, diameter) {
  if (asterisk.y > height + diameter) asterisk.y = -diameter;
  else asterisk.y += GRAVITY * asterisk.l * asterisk.mass;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}