//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
/*for (var i = 1; i <=100; i++) {
  if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}*/

//When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
/*for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}*/

//(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)

//Another solution but using operators
for (var i = 1; i <= 100; i++) {
    var f = i % 3 == 0,
        b = i % 5 == 0;

    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}

//Another solution but using the || operator
/*for (var i = 1; i <= 100; i++, msg = "") {
    if (!(i % 3)) msg += "Fizz";
    if (!(i % 5)) msg += "Buzz";
    console.log(msg || i);
}*/
