import {
  FETCH_RECIPE,
  FETCH_RECIPE_CREATE,
  FETCH_RECIPE_CREATE_ERROR,
  FETCH_RECIPE_CREATE_SUCCESS,
  FETCH_RECIPE_DELETE,
  FETCH_RECIPE_DELETE_ERROR,
  FETCH_RECIPE_DELETE_SUCCESS,
  FETCH_RECIPE_EDIT,
  FETCH_RECIPE_EDIT_ERROR,
  FETCH_RECIPE_EDIT_SUCCESS,
  FETCH_RECIPE_ERROR,
  FETCH_RECIPE_SUCCESS,
} from '../actionTypes'

const initialState = {
  recipes: [],
  pages: 0
}

const recipesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_RECIPE:
      return state
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: payload.recipes,
        pages: payload.pages
      }
    case FETCH_RECIPE_ERROR:
      return {
        ...state,
        recipes: []
      }

    case FETCH_RECIPE_CREATE:
      return state
    case FETCH_RECIPE_CREATE_SUCCESS:
      return {
        ...state,
        recipes: [payload, ...state.recipes]
      }
    case FETCH_RECIPE_CREATE_ERROR:
      return {
        ...state,
        recipes: [...state.recipes]
      }

    case FETCH_RECIPE_EDIT:
      return state
    case FETCH_RECIPE_EDIT_SUCCESS:
      const recipes = state.recipes.filter(({id}) => id !== payload.id)
      return {
        ...state,
        recipes: [payload, ...recipes]
      }
    case FETCH_RECIPE_EDIT_ERROR:
      return {
        ...state,
        recipes: [...state.recipes]
      }

    case FETCH_RECIPE_DELETE:
      return state
    case FETCH_RECIPE_DELETE_SUCCESS:
      const withoutRecipe = state.recipes.filter(({id}) => id !== payload)
      return {
        ...state,
        recipes: [...withoutRecipe]
      }
    case FETCH_RECIPE_DELETE_ERROR:
      return {
        ...state,
        recipes: [...state.recipes]
      }

    default:
      return state
  }
}

export default recipesReducer