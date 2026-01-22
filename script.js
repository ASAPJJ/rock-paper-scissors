console.log("Hello World");

function getComputerChoice() {
  let jugada = Math.floor(Math.random() * 3) + 1;

  if (jugada === 1) {
    return (jugada = "PIEDRA");
  } else if (jugada === 2) {
    return (jugada = "PAPEL");
  } else {
    return (jugada = "TIJERAS");
  }
}

function getHumanChoice() {
  jugadaHuman = prompt("Ingrese su jugada: Piedra, Papel o Tijeras...");

  return jugadaHuman.toUpperCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("EMPATE");
  } else if (
    (humanChoice == "PIEDRA" && computerChoice == "TIJERAS") ||
    (humanChoice == "PAPEL" && computerChoice == "PIEDRA") ||
    (humanChoice == "TIJERAS" && computerChoice == "PAPEL")
  ) {
    humanScore += 1;
    console.log(`${humanChoice} le gana a ${computerChoice}`);
  } else {
    computerScore += 1;
    console.log(`${computerChoice} le gana a ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
