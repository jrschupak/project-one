var space = document.querySelectorAll("space");



var insertImgTag = function() {
  for(var i = 0; i < space.length; i += 1) {
    var img = document.createElement('img');
    space[i].appendChild(img)
    console.log("This is space i " + space[i]);
  }
  return space[i];
}
  insertImgTag();

  var
