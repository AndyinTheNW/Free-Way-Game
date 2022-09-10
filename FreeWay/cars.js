       // CARS VARIABLES

// BLACK CAR = [0]; YELLOW CAR  = [1]; GREEN CAR = [2];
let pointsCars = 0;
let speedCars = [2.8, 3.8, 3];
let startPointCars = 600;
let finishPointCars = -120;
let xCars = [600, 600, 600];
let yCars = [210, 260, 316];
let lengthCars = [100, 80, 65];
let heightCars = [40, 40, 40];

       // FUNCTIONS "SHOW CAR"

function showCars(){
  for (let i = 0; i < showCarsList.length; i++){
    image(showCarsList [i],xCars[i],yCars[i], lengthCars [i],heightCars[i]);
    }
}
       // FUNCTIONS "MOVE CARS"  

function moveCars (){
  for (let i = 0; i < showCarsList.length; i++){
    xCars[i] -= speedCars[i];
  }
}

function returnCars(){
  for (let i = 0; i < showCarsList.length; i++){
    if (xCars[i] < finishPointCars){xCars[i] = startPointCars;}
  }
}

