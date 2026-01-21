console.log("Hello World")

function getComputerChoice(){
   let jugada =  Math.floor(Math.random() * 3) + 1

   if(jugada === 1){
    return jugada = "Piedra"
   } else if (jugada === 2){
    return jugada = "Papel"
   } else{
    return jugada = "Tijeras"
   }
   return jugada
} 

console.log(getComputerChoice())
