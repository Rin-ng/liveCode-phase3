import {movePlayer} from '../actions/playerMovement'

const originalState = {
   movement: 0,
}

const playerReducer = (state = originalState, action) => {
   switch(action.type){
      case 'movePlayer':{
         return Object.assign({}, state, {movement: action.movement}) ;
      }
      default: 
      return state
   }
}

export default playerReducer