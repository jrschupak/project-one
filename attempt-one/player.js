window.onload = function() {

  var referenceArr = ['<img src="images/player.jpg" class="player"/>','<img src="images/zombieGirl.jpg" class="zombie2"/>'];



var player = document.querySelector('.player');
//var playerIcon = document.querySelector('.playerIcon');
console.log(player);

var moveRight = function() {
  addEventListener("keydown", function(event) {
  if(event.keyCode == 39) {

    for(var row = 0; row < boardSpacesArr.length; row += 1) {

      for( var col = 0; col < boardSpacesArr[row].length; col += 1){

        var currentSpace = boardSpacesArr[row][col];
        //var spaceRight = boardSpacesArr[row][col += 1];

        var playerIcon = document.querySelector(".playerIcon");
        var referenceArr = ['<img src="images/player.jpg" class="player"/>','<img src="images/zombieGirl.jpg" class="zombie2"/>'];

        console.log(currentSpace);
        console.log(currentSpace.innerHTML);

        //console.log(playerIcon.innerHTML);

        if(currentSpace.innerHTML !== null) {
          console.log(currentSpace);
          var player = document.querySelector('.player');
          currentSpace.removeChild(player);
          if(col < 5) {
          console.log(currentSpace);
          boardSpacesArr[row][col += 1].appendChild(player);
          console.log(currentSpace);
          } else {
             currentSpace.appendChild(player);

          }
        } else {
          console.log("No player in this space");
          return currentSpace;
        }
      }
    }
   }
  });
};
//  var moveUp = function() {
//    addEventListener("keydown", function(event) {
//    if(event.keyCode == 87) {
//      console.log("Key w event is working");
//      for(var row = 0; row < boardSpacesArr.length; row += 1) {
//        console.log(boardSpacesArr[row]);
//
//        for( var col = 0; col < boardSpacesArr[row].length; col += 1){
//          console.log(boardSpacesArr[row][col]);
//
//          var currentSpace = boardSpacesArr[row][col];
//          console.log("currentSpace " + boardSpacesArr[row][col]);
//          var player = document.querySelector('img.player');
//          if(currentSpace.player !== null) {
//            console.log("if statement in progress");
//            currentSpace.removeChild(player);
//            if(row > 0) {
//            //currentSpace.removeChild(player);
//            newSpace = boardSpacesArr[row -= 1][col];
//            newSpace.appendChild(player);
//            } else {
//               currentSpace.appendChild(player);
//               console.log("if loop is working but parameter values are off");
//               console.log("currentSpace " + currentSpace);
//               console.log(currentSpace);
//               console.log("player " + player);
//            }
//          } else {
//            console.log("Player can not move up further");
//          }
//        }
//      }
//     }
//   });
//  }
//
//
//
//  var moveLeft = function() {
//    addEventListener("keydown", function(event) {
//    if(event.keyCode == 65) {
//      console.log("Key a event is working");
//      for(var row = 0; row < boardSpacesArr.length; row += 1) {
//        console.log(boardSpacesArr[row]);
//
//        for( var col = 0; col < boardSpacesArr[row].length; col += 1){
//          console.log(boardSpacesArr[row][col]);
//
//          var currentSpace = boardSpacesArr[row][col];
//          console.log("currentSpace " + boardSpacesArr[row][col]);
//          var player = document.querySelector('img.player');
//          if(currentSpace.player !== null) {
//            console.log("if statement in progress");
//            currentSpace.removeChild(player);
//            if(col > 0) {
//            //currentSpace.removeChild(player);
//            newSpace = boardSpacesArr[row][col -= 1];
//            newSpace.appendChild(player);
//            } else {
//               currentSpace.appendChild(player);
//               console.log("if loop is working but parameter values are off");
//               console.log("currentSpace " + currentSpace);
//               console.log(currentSpace);
//               console.log("player " + player);
//            }
//          } else {
//            console.log("Player can not move left anyfurther");
//          }
//        }
//      }
//    }
//   });
// }
//
//
//  console.log("moveLeft has been called");
//
//  var moveDown = function() {
//    addEventListener("keydown", function(event) {
//    if(event.keyCode == 83) {
//      console.log("Key s works");
//      for(var row = 0; row < boardSpacesArr.length; row += 1) {
//        console.log(boardSpacesArr[row]);
//
//        for( var col = 0; col < boardSpacesArr[row].length; col += 1){
//          console.log(boardSpacesArr[row][col]);
//
//          var currentSpace = boardSpacesArr[row][col];
//          console.log("currentSpace " + boardSpacesArr[row][col]);
//          var player = document.querySelector('img.player');
//          if(currentSpace.player !== null) {
//            console.log("if statement in progress");
//            currentSpace.removeChild(player);
//            if(row < 9) {
//            //currentSpace.removeChild(player);
//            newSpace = boardSpacesArr[row += 1][col];
//            newSpace.appendChild(player);
//            } else {
//               currentSpace.appendChild(player);
//               console.log("if loop is working but parameter values are off");
//               console.log("currentSpace " + currentSpace);
//               console.log(currentSpace);
//               console.log("player " + player);
//            }
//          } else {
//            console.log("Player can not move down anyfurther");
//          }
//        }
//      }
//     }
//    });
//  }



  moveRight();
};
//  moveLeft();
//  moveUp();
//  moveDown();
// }
