// INTERFACE VARIABLES

let showRoad;

// INTERFACE FUNCTIONS

function preload (){
  
  showActor = loadImage ("images/actor1.png")
  showRoad = loadImage ("images/road.png")
  showImageCar1 = loadImage ("images/car1.png")
  showImageCar2 = loadImage ("images/car2.png")
  showImageCar3 = loadImage ("images/car3.png")
  showImageCar4 = loadImage ("images/car4.png")
  showImageCar5 = loadImage ("images/car5.png")
  showImageCar6 = loadImage ("images/bike1.png")
  showImageCar7 = loadImage ("images/bike2.png")
  soundtrack = loadSound("sounds/soundtrack.mp3");
  collisionSound = loadSound("sounds/collision.mp3");
  scoreSound = loadSound("sounds/score.wav");
  
  
  showRightCarsList = [showImageCar4, showImageCar5, showImageCar6, showImageCar7]
  showCarsList = [showImageCar1, showImageCar2, showImageCar3]
  }

function showPointsActor (){
  textAlign (CENTER);
  textSize (25)
  fill(color (255,240, 60))
  text (pointsActor, width - 400, 27);
  textAlign (CENTER);
  textSize (25)
  fill(color (255,240, 60))
  text (pointsCars, width -100, 27);}

function scoreActor(){
  if (yActor < finish) {
    pointsActor += 1
  }
  if (yActor < finish){
    yActor = yStart
    scoreSound.play();
  
  } 
  }