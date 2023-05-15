function setup(){
createCanvas (800,800)
	
}

function draw(){

background(117, 155, 193)


for(let i=0; i<50; i=i+1){
let spessore = random (1, 3)
let lunghezza = random (20, 100)
let posX = random (0, width)
let posY= random (-lunghezza, height)

stroke(255)
strokeWeight (spessore)
line (posX, posY, posX, posY+ 50 + lunghezza)
}


}

