var sounds = Array();
var keys = ['A', 'Z', 'E',
			'I', 'O', 'P',
			'Q', 'S', 'D',
			'K', 'L', 'M']

function setup() {
    
    createCanvas(200, 200);
    soundFormats('mp3', 'ogg');

    // Load DRUM sounds
    for (var i=0; i<3; i++) {
    	sounds[i] = loadSound("sounds/instru1/bank1/drum"+(i+1)+".mp3");
    }

    // Load CHORD sounds
    for (var i=0; i<3; i++) {
    	sounds[i+3] = loadSound("sounds/instru2/bank1/chord"+(i+1)+".mp3");
    }

    // Load GUITAR sounds
    for (var i=0; i<3; i++) {
    	sounds[i+6] = loadSound("sounds/instru3/bank1/guitar"+(i+1)+".mp3");
    }

    // Load BASS sounds
    for (var i=0; i<3; i++) {
    	sounds[i+9] = loadSound("sounds/instru4/bank1/bass"+(i+1)+".mp3");
    }

}

function draw() {
    
}

function keyPressed() {
	console.log(key);

	for (var i=0; i<keys.length; i++) {
		if (key == keys[i]) {
			console.log(i);
			sounds[i].play();
		}
	}
	
}

