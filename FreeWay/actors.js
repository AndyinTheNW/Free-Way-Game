       // ACTOR 1 VARIABLES

       let showActor; 
       let xActor = 100;
       let yActor = 367;
       let widthActor = 30;
       let heightActor = 30;
       let speedActor = 1;
       let finish = 16;
       let yStart = 367;
       let xStart = 100;
       let collide = false;
       let hitActor = 1;
       let pointsActor = 0;
       let W = 87;
       let A = 65;
       let S = 83;
       let D = 68;
       
       
              // SHOW ACTORS
       
       function functionShowActor (){
         image (showActor,xActor,yActor,widthActor,heightActor);
         
       }
              // MOVE ACTORS
       
       
       function moveActor(){
       
         if (keyIsDown(W)){
           yActor -=  speedActor;
         } 
         if (keyIsDown (S)){
           if (dontDown()){
           yActor += speedActor;}
         }
         if (keyIsDown (D)){
           xActor += speedActor;
         } 
         if (keyIsDown(A)){
           xActor -= speedActor;
         }
       }
       
       function verifyCollide (){
         //collideRectCircle(x1, y1, width1, height1,cx, cy, diameter)
         for (let i = 0; i < showCarsList.length; i++){
           collide = collideRectCircle (xCars[i], yCars[i], lengthCars[i], heightCars[i], xActor, yActor, hitActor)
           if (collide) {
              returnActor();
             pointsCars += 1;
             collisionSound.play();
           }
           
         }
       }
       
       function verifyRightCollide (){
         //collideRectCircle(x1, y1, width1, height1,cx, cy, diameter)
         for (let i = 0;i < showRightCarsList.length; i++){
           collide = collideRectCircle (xRightCars[i], yRightCars[i], lengthRightCars[i], heightRightCars[i], xActor, yActor, hitActor)
           if (collide) {
              returnActor();
             pointsCars += 1;
             collisionSound.play();
           }
         }
       }
       
       function returnActor (){
         yActor = yStart;
         xActor = xStart;
         
       }
       
       function dontDown (){
         return yActor < yStart - 1;
       }
       
       
       