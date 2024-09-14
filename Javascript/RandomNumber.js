let max = prompt("Enter a maximum number:");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the random number");

while(true) {

  if(guess == "quit") {
    console.log(`User quit\nRandom number is: ${random}`);
    break;
  }
  else if(guess == random) {
    console.log(`Your guess is right: ${random}`);
    break;
  }

  // if(guess > random) 
  //   console.log("Larger number entered.");
  // else if(guess < random)
  //   console.log("Smaller number entered.");

  if(guess > random) 
    guess = prompt("Your number was larger, guess again: ");
  
  else if(guess < random)
  guess = prompt("Your number was smaller, guess again: ");


  // guess = prompt("Wrong number, guess again: ");

}