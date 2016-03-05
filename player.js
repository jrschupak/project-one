window.onload = function () {

var player = document.querySelector('img .player');
console.log(player);
 var moveUp = addEventListener("keydown", function(event) {
   if(event.keyCode == 87) {
     console.log("Key w event is working");
     for(var row = 0; row < boardSpacesArr.length; row += 1) {
       console.log(boardSpacesArr[row]);

       for( var col = 0; col < boardSpacesArr[row].length; col += 1){
         console.log(boardSpacesArr[row][col]);

         var currentSpace = boardSpacesArr[row][col];
         console.log("currentSpace " + boardSpacesArr[row][col]);
         if(currentSpace == player) {
           console.log("if statement in progress");
           currentSpace.pop(player);
           newSpace = boardSpacesArr[row += 1][col];
           newSpace.push(player);
         } else {
           console.log("if loop is working but parameter values are off");
           console.log("currentSpace " + currentSpace);
           console.log(currentSpace);
           console.log("player " + player);
         }
       }
     }
    }
 });



 var moveLeft = addEventListener("keydown", function(event) {
   if(event.keyCode == 65) {
     console.log("Key a event is working");
     for(var row = 0; row < boardSpacesArr.length; row += 1) {
       console.log(boardSpacesArr[row]);

       for( var col = 0; col < boardSpacesArr[row].length; col += 1) {
         console.log("Second for loop is working");

          var currentSpace = boardSpacesArr[row][col];
          console.log("currentSpace " + boardSpacesArr[row][col]);
          if(currentSpace == player) {
            currentSpace.pop(player);
            newSpace = boardSpacesArr[row += 1][col];
            newSpace.push(player);
          }
      }
     }
    }
 });


 console.log("moveLeft has been called");

 var moveDown = addEventListener("keydown", function(event) {
   if(event.keyCode == 83) {
     console.log("Key s works");

   }
 });

 var moreRight = addEventListener("keydown", function(event) {
   if(event.keyCode == 68) {
     console.log("Key d works");
   }
 });
 }
