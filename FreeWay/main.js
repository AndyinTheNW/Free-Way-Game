function setup() {
  
    //soundtrack.loop();
     createCanvas(500, 400);
   }
   
   function draw() {
   
     background(showRoad);
     functionShowActor ();
     moveActor();
     returnCars ();
     moveCars ();
     showCars ();
     returnRightCars ();
     moveRightCars ();
     showRightCars ();
     verifyRightCollide();
     verifyCollide ();
     showPointsActor ();
     scoreActor ();
   
     
   }
   