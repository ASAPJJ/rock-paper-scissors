const piedra = document.querySelector(".Piedra");
const papel = document.querySelector(".Papel");
const tijeras = document.querySelector(".Tijeras");
const ul = document.querySelector("ul");
const div = document.querySelector("div");
let humanScore = 0;
let computerScore = 0;

function playGameWithButtons(humanChoice) {
  if (humanScore === 5 || computerScore === 5) {
    return alert("El juego ya a finalizado")
  }
  const computerChoice = getComputerChoice();
  const listItem = document.createElement("li");
  const ListText = document.createElement("span");
  const reiniciar = document.createElement("button");

  function textoDelListado(texto) {
    ListText.textContent = texto;
    listItem.appendChild(ListText);
    ul.appendChild(listItem);
  }

  function botonReiniciar() {
    reiniciar.textContent = "Reiniciar Juego?";
    div.appendChild(reiniciar);
    reiniciar.addEventListener("click", (e) => {
      location.reload();
    })
  }

  const r = playRound(humanChoice, computerChoice);
  if (humanScore < 5 && computerScore < 5) {
    textoDelListado(r);
  } else if (humanScore === 5) {
    textoDelListado(`Ganaste!! ${r}`);
    botonReiniciar();
  } else {
    textoDelListado(`Gano la computadora. ${r}`);
    botonReiniciar();
  }
}

piedra.addEventListener("click", (e) => {
  const humanChoice = "PIEDRA";
  playGameWithButtons(humanChoice);
})
papel.addEventListener("click", (e) => {
  const humanChoice = "PAPEL";
  playGameWithButtons(humanChoice);
})
tijeras.addEventListener("click", (e) => {
  const humanChoice = "TIJERAS";
  playGameWithButtons(humanChoice);
})

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `EMPATE. Humano: ${humanScore} Computadora: ${computerScore}.`;
  } else if (
    (humanChoice == "PIEDRA" && computerChoice == "TIJERAS") ||
    (humanChoice == "PAPEL" && computerChoice == "PIEDRA") ||
    (humanChoice == "TIJERAS" && computerChoice == "PAPEL")
  ) {
    humanScore += 1;
    return `${humanChoice} le gana a ${computerChoice}. Humano: ${humanScore} Computadora: ${computerScore}`;
  } else {
    computerScore += 1;
    return `${computerChoice} le gana a ${humanChoice}. Humano: ${humanScore} Computadora: ${computerScore}.`;
  }
}