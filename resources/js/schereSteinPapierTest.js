const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid input. Please choose "rock", "paper", or "scissors".');
    return null; // Return null for invalid input
  }
};

//Makes Computer choose one option at random.
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'rock';
  }
};

// Behaviour of the Variables 'rock', 'paper' and 'scissors' (with each other) 
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game has ended in a Tie.';
  }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'You have lost this round.';
  }else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You have won this round.';
  }
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You have won this round.';
  }else if (userChoice === 'rock' && computerChoice === 'paper'){
    return 'You have lost this round.';
  }
  if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You have won this round.';
  }else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'You have lost this round.';
  }
  if (userChoice === 'bomb') {
    return 'You have won this round.';
  }
};

const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);
  if (!userChoice) {
  return; // Exit's if user input is invalid.
  }
  const computerChoice = getComputerChoice();
  document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
  document.getElementById('result').textContent = determineWinner(userChoice, computerChoice);
};

// Event Listener for Buttons
const buttons = document.querySelectorAll('.choice-btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const choice = button.getAttribute('data-choice');
    playGame(choice); 
  });
});
