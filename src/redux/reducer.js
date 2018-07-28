import { combineReducers } from 'redux';
import isLoading from './isLoading'
import updateToken from './token'
import { SETACTIVE } from './action';
function active(state=0,action){
    switch(action.type){
        case SETACTIVE:
          return action.active
        break;
        default:
          return state
    }
}
export const reducers = combineReducers({
    isLoading:isLoading,
    token:updateToken,
    active:active
})