export function DiceRandom(){
   var randomDice = Math.floor(6 * Math.random()) + 1
   // dispatch(playerLocation(randomDice))
   dispatch(movePlayer(randomDice))
}

export function movePlayer(randomDice){
   return{
      type: 'movePlayer',
      movement: randomDice
   }
}