var space = document.querySelectorAll("space");
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
var space0_10 = document.querySelector('.row1 .col-10');

var rowDivs = function() {
  var rows = document.querySelectorAll('.row');

  for(var i = 0; i < rows.length; i += 1) {
    boardSpacesArr.push(rows[i]);
  }
  return rows[i];
}

rowDivs();


var startButton = document.querySelector('button');

var start = function() {
  startButton.addEventListener("click", function() {
    alert("Start button works");
    var addPlayer = function() {
      var space0_0 = document.querySelector('.row1 .col-1');
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
      console.log(imgTag);
      space0_10.appendChild(imgTag);
      console.log(space0_10);

      var imgTag = document.createElement("img");
      imgTag.setAttribute("class", "zombie");
      imgTag.setAttribute("id", "zombie2");
      console.log("Zombie class added " + imgTag)
      imgTag.src = "images/zombieGuy.jpeg";
      console.log(imgTag);
      var space10_0 = document.querySelector('.row10 .col-1');
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
      var space10_10 = document.querySelector(".row10 .col-10");
      console.log(space10_10);
      space10_10.appendChild(imgTag);

      console.log(imgTag);

    }
    addZombies();
  })
}

start();




















//Do Not Remove This.
