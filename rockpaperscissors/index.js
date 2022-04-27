

const computerPlay = () => {
    let choice = Math.floor(Math.random() * 3) + 1
    if(choice === 1) {
        choice = 'rock'
    }
    if(choice === 2) {
        choice = 'scissors'
    }
    if(choice === 3)  {
        choice = 'paper'
    }
    return choice
}

const getPlayerinput = () => {

    choice = parseInt(prompt())
    if(choice !== "rock" || choice !== "paper" || choice !== "scissors") return
}

const playRound = (cSelection, pSelection) => {
    if(pSelection === 'rock' && cSelection === 'scissors' 
        || pSelection === 'paper' && cSelection === 'rock'
        || pSelection === 'scissors' && cSelection === 'paper'
        ) {
        return `You win!, ${pSelection} beats ${cSelection}`
    }
    if(pSelection === cSelection) return 'TIE!'
    return `You lose! ${cSelection} beats ${pSelection}`
}


const game = () => {


    let winner = playRound(computerSelection, playerSelection)

    if(winner.includes('win')) {
        console.log('you win')
        winner = 'player'
    } else if(winner.includes('lose')) {
        console.log('you lose')
        winner = 'computer'
    } else {
        console.log('tie!')
        winner = 'tie'
    }

}



const computerSelection = computerPlay()
const playerSelection = getPlayerinput()

game()


