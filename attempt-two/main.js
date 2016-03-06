
  console.log("main.js is loaded!")

  var player = document.querySelector('.bike');
  var board = document.querySelector('.board')
  var right = 590;

  var moveLeft = function() {
    console.log("initializing moveLeft");


    console.log();
    addEventListener("keydown", function(){
      if(event.keyCode == 37){
        console.log("Left arrow key event Good!");
        if(right <= window.innerWidth - 221){
          console.log("If statement started");
          console.log(player.style.right);
          right += 200;
          console.log(right);
          console.log(player.style.right);
          player.style.right = right + "px";
          player.style.transition = 1000;
          console.log(player);
        } else {
          console.log("Can't move any further left");
        }
      }
    });
  }
moveLeft();

  var moveRight = function() {
    var left = 0;
    addEventListener("keydown", function(){
      if(event.keyCode == 39){
        if(right <= window.innerWidth -221)
        player.style.right = right + "px";
        right -= 200;
        player.style.transition = 1000;

      }
    })
  };
  moveRight();
