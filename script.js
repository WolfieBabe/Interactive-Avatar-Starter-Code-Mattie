/* VARIABLES */
let img;

let eyeSeperation = 60;
let mouthSeperation = 50;
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;

let refPos
let actPos

/* RUNS ONCE */
function preload() {
  img = loadImage('assets/background.jpg');
}

function setup() {
  //sets the screen size
  createCanvas(windowWidth, windowHeight);

  //sets the background
  background(255, 255, 255);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(1);

  //Background
  img.resize(width, height);
  image(img, 0, 0);

  // Hair
  fill(168, 151, 94);
  rect(width / 2, height / 2 + 75, 200, 100);
  
  // Face
  fill(250, 244, 217);
  ellipse(width / 2, height / 2, 175, 200);
  strokeWeight(0);
  arc(width / 2, height / 2 + 25, 180, 200, 200, 340, CHORD);
  strokeWeight(1);
  
  // Hair cont.
  fill(168, 151, 94);
  rect(width / 2 - 83, height / 2 + 49, 49, 200);
  rect(width / 2 + 83, height / 2 + 49, 49, 200);
  arc(width / 2, height / 2 - 50, 215, 150, 180, 360);


  // Eyes
  function eyeState(side, closed) {
    if (side == 'left' || side == 'l') {
      refPos = -1
    }
    else if (side == 'right' || side == 'r') {
      refPos = 1
    }
    else {
      print('Eye Reference Position Error')
    }
    
    if (closed == true) {
      fill(0);
      ellipse(width / 2 + refPos * eyeSeperation / 2, height / 2 - mouthSeperation / 2, eyeWidth, eyeHeight / 8);
      fill(196, 223, 242)
      ellipse(width / 2 - refPos * eyeSeperation / 2, height / 2 - mouthSeperation / 2, eyeWidth, eyeHeight);
      fill(0)
      ellipse(width / 2 - refPos * eyeSeperation / 2, height / 2 - mouthSeperation / 2, pupilWidth, pupilHeight);
    }
    else {
      ellipse(width / 2 + refPos * eyeSeperation / 2, height / 2 - mouthSeperation / 2, eyeWidth, eyeHeight);
    }
  }
  
  if (mouseIsPressed) {
    // Eyes Closed
    if (mouseX <= width / 2) {
      actPos = 'l'
    }
    else {
      actPos = 'r'
    }
  
    eyeState(actPos, true)

    // Mouth
    fill(250, 244, 217);
    arc(width / 2, height / 2 + mouthSeperation / 2 + 10, 50, 50, 0, 180);
  }
  else {
    fill(196, 223, 242)
    ellipse(width / 2 - eyeSeperation / 2, height / 2 - mouthSeperation / 2, eyeWidth, eyeHeight);
    ellipse(width / 2 + eyeSeperation / 2, height / 2 - mouthSeperation / 2, eyeWidth, eyeHeight);

    // Pupils
    fill(0);
    ellipse(width / 2 - eyeSeperation / 2, height / 2 - mouthSeperation / 2, pupilWidth, pupilHeight);
    ellipse(width / 2 + eyeSeperation / 2, height / 2 - mouthSeperation / 2, pupilWidth, pupilHeight);

    // Mouth
    fill(232, 182, 169);
    arc(width / 2, height / 2 + mouthSeperation / 2 + 10, 50, 50, 0, 180);
  }
  
  // Text
  fill(0);
  if (height >= width) {
    textSize(.0375 * width)
  }
  else {
    textSize(0.0375 * height);
  }
  text('\“Without mathematics, there\'s nothing \nyou can do. Everything around you is mathematics. \nEverything around you is numbers.\” – Shakuntala Devi', 20, 20);

  // Directions for mouse press
  text(' Click to see \n me wink and \n smile.', .75 * width, .875 * height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
