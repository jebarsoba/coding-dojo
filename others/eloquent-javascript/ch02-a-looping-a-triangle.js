/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

var abc = "abc";
console.log(abc.length);
// → 3

Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.
*/

var line = "";

do {
  console.log(line += "#");
} while (line.length < 7);

//Book solution
/*
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
*/
