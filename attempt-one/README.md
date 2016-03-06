Jonathan Schupak

Zombie Destroyer

Your objective is to move around the board and kill all the zombies without dying.

You move around the board by making your player face a specific direction, either up, down, left or right, and then moving forward one space.

You kill a zombie by hitting the stab button when a zombie is in the space directly in front of you.

Sudo code

Get board
get player on board
get player to move

get zombies on board
get zombies to move

interaction
player stabs either up, down, left or right, check to see if a zombie is in that space.
if zombie is in space in that space, remove the zombie(zombie image).
if zombie moves into players space, player dies.


Start Button Sudo
When the player clicks the start button it will place and image(picture) of the player on the board,
places x amount of zombies(zombie pictures) on the board. Calls the function that makes the zombies randomly move around the board.
BONUS, switch the player button with a restart button that just recalls the start button.

Player move Sudo
Make an eventListener for the "w" key, which moves player up one row, "a" which moves player left one space, "s" which moves player down one space, and "d" which moves player right one space.

When the play presses down on one of these keys, it needs to grab the specific array that it is in, pop out the img, then push it into the new object which is determined by which key is pressed.

for(loops) //goes through boardsArray and returns value in each object.
  if(return == player)
    move player one space accordingly
















//do not remove
