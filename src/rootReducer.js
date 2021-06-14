import counterReducer from './modules/Counter/reducer'
import isLoggedReducer from './modules/isLogged/reducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    counterReducer,
    isLoggedReducer,
  });
  
  export default rootReducer;