       // RIGHT CARS VARIABLES

// LIST SEQUENCE: RED CAR = [0]; PINK CAR = [1]; RED BIKE = [2]; WHITE BIKE = [3];

let speedRightCars = [-4, -3, -4, -3.5];
let startRightPointCars = -200;
let finishRightPointCars = 610;
let xRightCars = [-110, -110, -550, -110];
let yRightCars = [150, 96, 150, 40];
let lengthRightCars = [100, 80, 60, 50];
let heightRightCars = [40, 40, 35, 40];

       // FUNCTIONS "SHOW RIGHT CARS "

function showRightCars(){
  for (let i = 0; i < showRightCarsList.length; i++){
    image(showRightCarsList [i],xRightCars[i],yRightCars[i], lengthRightCars [i],heightRightCars[i]);
    }
}
       // FUNCTIONS "MOVE RIGHT CARS"  

function moveRightCars (){
  for (let i = 0; i < showRightCarsList.length; i++){
    xRightCars[i] -= speedRightCars[i];
  }
}

function returnRightCars(){
  for (let i = 0; i < showRightCarsList.length; i++){
    if (xRightCars[i] > finishRightPointCars){xRightCars[i] = startRightPointCars;}
  }
}
