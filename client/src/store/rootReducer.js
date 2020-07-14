import { combineReducers } from 'redux'
import globalReducer from './reducers/globalReducer'
import recipesReducer from './reducers/recipeReducer'

const rootReducer = combineReducers({
  globalState: globalReducer,
  recipesState: recipesReducer
})

export default rootReducer