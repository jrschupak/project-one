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

var rowDivs = function() {
  var rows = document.querySelectorAll('.row');

  for(var i = 0; i < rows.length; i += 1) {
    boardSpacesArr.push(rows[i]);
  }
  return rows[i];
}

rowDivs();






















//Do Not Remove This.
