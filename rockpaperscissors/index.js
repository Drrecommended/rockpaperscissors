//Play game
const game = () => {
    //Initialize variables
    let round = 0
    let roundResult
    let playerScore = 0
    let computerScore = 0
    
    //Loop for 5-rounds of play
    for(let i = 0; i < 5; i++) {
        //Gather new selections for each loop
        const computerSelection = computerPlay()
        const playerSelection = getPlayerinput()
        //Pass the selections into play round function and assign the result to roundResult
        roundResult = playRound(computerSelection, playerSelection)
        //If the string returns by roundResult includes win, lose or tie handle accordingly
        if(roundResult.includes('win')) {
            playerScore++
        } else if(roundResult.includes('lose')) {
            computerScore++
        } else {
            console.log('tie!')
        }
        //Increment round
        round++
    }

    console.log(playerScore, computerScore)
    //Check who won the round
    if(playerScore > computerScore ) {
        console.log('YOU WIN!')
    } else {
        console.log('YOU LOSE!')
    }

}


//Gather comp choice
const computerPlay = () => {
    //Random choice between 1 - 3
    let choice = Math.floor(Math.random() * 3) + 1
    //Scenarios
    if(choice === 1) {
        choice = 'rock'
    }
    if(choice === 2) {
        choice = 'scissors'
    }
    if(choice === 3)  {
        choice = 'paper'
    }
    //Return the choice
    return choice
}


//Gather computer choice
const getPlayerinput = () => {
    //Collect input and trim any extra space
    let choice = prompt().trim()
    //If not any of the scenarios return 
    if(choice !== 'rock' & choice !== 'scissors' & choice !== 'paper') {
        
        return
    }
    //return "Rock, paper or scissors"
    return choice
}


//Play a round
const playRound = (cSelection, pSelection) => {   
    //Compare different case scenarios where the player wins 
    if(pSelection === 'rock' && cSelection === 'scissors' 
        || pSelection === 'paper' && cSelection === 'rock'
        || pSelection === 'scissors' && cSelection === 'paper'
        ) {
        //Return winning scenario as a string using template literals 
        return `You win!, ${pSelection} beats ${cSelection}`
    }
    //Tie scenario
    if(pSelection === cSelection) return 'TIE!'
    //Lose scenario
    return `You lose! ${cSelection} beats ${pSelection}`
}

//Call the function allowing game to start
game()






