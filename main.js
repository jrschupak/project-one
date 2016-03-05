var space = document.querySelectorAll("col");
//
//
//
// var insertImgTag = function() {
//   for(var i = 0; i < space.length; i += 1) {
//     var img = document.createElement('img');
//     space[i].appendChild(img)
//     console.log("This is space i " + space[i]);
//   }
//   return space[i];
// }
//   insertImgTag();
//
//   var img = document.querySelectorAll('img');
//
//   var insertImg = function() {
//     for(var i = 0; i < img.length; i += 1) {
//       img[i].src = 'images/zombieSpace.jpeg';
//     }
//     return img[i];
//   }
//
//   insertImg();

var boardSpacesArr = [];
var space0_10 = document.getElementById("0-10");

var rowArrPush = function() {
  var rowOne = document.querySelectorAll('.row1 .col');
  var rowOneArr = [];
  for(var i = 0; i < rowOne.length; i += 1) {
    rowOneArr.push(rowOne[i]);
  }
  console.log(rowOneArr);
  boardSpacesArr.push(rowOneArr)

  var rowTwo = document.querySelectorAll('.row2 .col');
  var rowTwoArr = [];
  for(var i = 0; i < rowTwo.length; i += 1) {
    rowTwoArr.push(rowTwo[i]);
  }
  console.log(rowTwoArr);
  boardSpacesArr.push(rowTwoArr);

  var rowThree = document.querySelectorAll('.row3 .col');
  var rowThreeArr = [];
  for(var i = 0; i < rowThree.length; i += 1) {
    rowThreeArr.push(rowThree[i]);
  }
  boardSpacesArr.push(rowThreeArr);

  var rowFour = document.querySelectorAll('.row4 .col');
  var rowFourArr = [];
  for(var i = 0; i < rowFour.length; i += 1) {
    rowFourArr.push(rowFour[i]);
  }
  boardSpacesArr.push(rowFourArr);

  var rowFive = document.querySelectorAll('.row5 .col');
  var rowFiveArr = [];
  for(var i = 0; i < rowFive.length; i += 1) {
    rowFiveArr.push(rowFive[i]);
  }
  boardSpacesArr.push(rowFiveArr);

  var rowSix = document.querySelectorAll('.row6 .col');
  var rowSixArr = [];
  for(var i = 0; i < rowSix.length; i += 1) {
    rowSixArr.push(rowSix[i]);
  }
  boardSpacesArr.push(rowSixArr);

  var rowSeven = document.querySelectorAll('.row7 .col');
  var rowSevenArr = [];
  for(var i = 0; i < rowSeven.length; i += 1) {
    rowSevenArr.push(rowSeven[i]);
  }
  boardSpacesArr.push(rowSevenArr);

  var rowEight = document.querySelectorAll('.row8 .col');
  var rowEightArr = [];
  for(var i = 0; i < rowEight.length; i += 1) {
    rowEightArr.push(rowEight[i]);
  }
  boardSpacesArr.push(rowEightArr);

  var rowNine = document.querySelectorAll('.row9 .col');
  var rowNineArr = [];
  for(var i = 0; i < rowNine.length; i += 1) {
    rowNineArr.push(rowNine[i]);
  }
  boardSpacesArr.push(rowNineArr);

  var rowTen = document.querySelectorAll('.row10 .col');
  var rowTenArr = [];
  for(var i = 0; i < rowTen.length; i += 1) {
    rowTenArr.push(rowTen[i]);
  }
  boardSpacesArr.push(rowTenArr);

}



rowArrPush();


var startButton = document.querySelector('button');

var start = function() {
  startButton.addEventListener("click", function() {
    alert("Start button works");
    var addPlayer = function() {
      var space0_0 = document.getElementById('0-0');
      var imgTag = document.createElement("img");

      imgTag.src = "images/player.jpg";
      imgTag.setAttribute("class","player");
      space0_0.appendChild(imgTag);
    }

    addPlayer();



    var addZombies = function() {

      console.log("0_10 " + space0_10);
      var imgTag = document.createElement("img");
      imgTag.setAttribute("class", "zombie");
      imgTag.setAttribute("id", "zombie1");
      console.log("Zombie class added " + imgTag)
      imgTag.src = "images/zombieGuy.jpeg";
      var space0_9 = document.getElementById('0-9');
      console.log(imgTag);
      space0_9.appendChild(imgTag);
      console.log(space0_10);

      var imgTag = document.createElement("img");
      imgTag.setAttribute("class", "zombie");
      imgTag.setAttribute("id", "zombie2");
      console.log("Zombie class added " + imgTag)
      imgTag.src = "images/zombieGuy.jpeg";
      console.log(imgTag);
      var space10_0 = document.getElementById("9-0");
      console.log("Space 10 0 " + space10_0);
      space10_0.appendChild(imgTag);
      console.log(imgTag);
      console.log(space10_0);

      var imgTag = document.createElement("img");
      imgTag.setAttribute("class", "zombie");
      imgTag.setAttribute("id","zombie3");
      console.log("Zombie class added " + imgTag)
      imgTag.src = "images/zombieGirl.jpg";
      console.log(imgTag);
      var space10_10 = document.getElementById("9-9");
      console.log(space10_10);
      space10_10.appendChild(imgTag);

      console.log(imgTag);

    }
    addZombies();
  })
}

start();
