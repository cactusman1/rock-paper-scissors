
        // This function will generate the computer's choice. T
        // The idea is that this function will assign (to the "choice variable")
        //  and return either rock paper or scissor based on the value returned by Math.random()
        function getComputerChoice () {
            let randomNumber = Math.random(); 
            let choice;
            if (randomNumber >= 0 && randomNumber <= 0.3){
                choice = 'rock';
            }
            else if (randomNumber >= 0.4 && randomNumber <= 0.7){
                choice = 'paper';
            }
            else  {
                choice = 'scissors';
            }
            return choice;
        }
        computerChoice = getComputerChoice();
        console.log(computerChoice);
    