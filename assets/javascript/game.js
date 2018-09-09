var computer = ["a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r",
    "s","t","u","w","x","y","z"];
var wins = 0;
var losses = 0;
var opor = 10;
        
            
document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computer[Math.floor(Math.random() * computer.length)]

        if (userGuess === computerGuess) {
            wins++;
            }

            else {
            opor--
                if (opor == 0) {
                    losses++
                    opor = 10;
                    }
            } 
                
                    
                        
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("oportunities").innerHTML = "Guesses left: " + opor ;
        document.getElementById("guesses").innerHTML = "Your Guesses so far: " + userGuess ;
}   
                 
            