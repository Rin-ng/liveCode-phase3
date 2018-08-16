import {movePlayer} from '../actions/playerMovement'

const originalState = {
   movement: 0,
}

const storeData = (state = originalState, action) => {
   switch(action.type){
      case 'movePlayer':{
         return Object.assign({}, state, {movement: action.movement}) ;
      }
      // case 'itemLoaded':{
      //    return Object.assign({}, state, {loaded: action.loaded})
      // }
      default: 
      return state
   }
}

export default storeData