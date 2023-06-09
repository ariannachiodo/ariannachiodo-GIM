let posizioneY
let posizioneX
let velX
let velY

function setup(){
	createCanvas(windowWidth, windowHeight);
	posizioneX = width/2
	posizioneY = height/2 
	velX = 12
	velY = 5
	background(0)
}

function draw(){
	noStroke()
	fill(map(posizioneX, 0, width, 0, 255), map(posizioneY, 0, width, 0, 255), 0)

	
	const g = (sin(frameCount * 0.1) + 0.2) * 150.5
	const b = (sin(frameCount * 0.10) + 0.2) * 200.5
	fill(0, g, b) 

	const d = sin(frameCount * 0.08) * 180 + 1

	ellipse(posizioneX, posizioneY, d, d)
	ellipse(width - posizioneX, posizioneY, d, d)

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX >= width || posizioneX <= 8) velX = -velX
	if (posizioneY >= height || posizioneY <= 9) velY = -velY
}

function keyPressed(){
	if (key == 's') save("pong.png") 
}