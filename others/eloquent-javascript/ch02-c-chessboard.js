/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

/*var chessboard = "";
var square = " ";

for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    chessboard += square;

    if (j == 8 - 1)
      break;

    square = square == " " ? "#" : " ";
  }

  chessboard += "\n";
}

console.log(chessboard);*/

// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
var size = 8;
var chessboard = "";
var square = " ";

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    chessboard += square;

    square = (j == size - 1 && j % 2 != 0) ? square : square == " " ? "#" : " ";
  }

  chessboard += "\n";
}

console.log(chessboard);

//Book solution
/*var size = 8;
var chessboard = "";

for (var i = 1; i <= size; i++) {
  for (var j = 1; j <= size; j++) {
    chessboard += (i + j) % 2 == 0 ? " " : "#";
  }

  chessboard += "\n";
}

console.log(chessboard);
*/
