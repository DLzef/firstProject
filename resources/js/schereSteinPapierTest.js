// Rock paper scissors code
const getUserChoice = userInput => {

  if (userInput === 'Stein' || userInput === 'Papier' || userInput === 'Schere' || userInput === 'Bombe') {
    return userInput;
  }
};

//Makes Computer choose one option at random.
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'Stein';
    case 1:
      return 'Papier';
    case 2:
      return 'Schere';
  }
};

// Behaviour of the Variables 'rock', 'paper' and 'scissors' (with each other) 
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Das Spiel ended im Unentschieden!';
  }
  if (userChoice === 'Schere' && computerChoice === 'Stein') {
    return 'Du hast verloren.';

  }else if (userChoice === 'Schere' && computerChoice === 'Papier') {
    return 'Du hast gewonnen!';
  }
  if (userChoice === 'Stein' && computerChoice === 'Papier') {
    return 'Du hast verloren.';

  }else if (userChoice === 'Stein' && computerChoice === 'Schere'){
    return 'Du hast gewonnen!';
  }
  if (userChoice === 'Papier' && computerChoice === 'Stein') {
    return 'Du hast gewonnen!';

  }else if (userChoice === 'Papier' && computerChoice === 'Schere') {
    return 'Du hast verloren.';
  }
  if (userChoice === 'Bombe') {
    return 'Du hast gewonnen!';
  }
};

const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  document.getElementById('user-choice').textContent = `Deine Auswahl: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Die Auswahl des Computers: ${computerChoice}`;
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
