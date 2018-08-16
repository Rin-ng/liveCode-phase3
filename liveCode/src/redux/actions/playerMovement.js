export function DiceRandom(){
 
   return(dispatch) => {
      var randomDice = Math.floor(6 * Math.random()) + 1
      dispatch(movePlayer(randomDice))
   }  
}

export function movePlayer(moveNum){
   return{
      type: 'movePlayer',
      movement: moveNum
   }
}