var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guesses_num = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number Between 1 to 100");
    } else {
        guesses_num.push(user_guess);
        no_of_guesses += 1;
        if (user_guess < answer) {
            msg1.textContent = "Your Guess is Too low";
            msg2.textContent = "No. Of Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed Numbers Are: " + guesses_num.join(", ");
        } else if (user_guess > answer) {
            msg1.textContent = "Your Guess is Too High";
            msg2.textContent = "No. Of Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed Numbers Are: " + guesses_num.join(", ");
        } else if (user_guess == answer) {
            msg1.textContent = "Yahhhh You won It!!";
            msg2.textContent = "The Number was " + answer;
            msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
        }
    }
}

// Add event listener for Enter key press
document.getElementById("guess").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        play();
    }
});
