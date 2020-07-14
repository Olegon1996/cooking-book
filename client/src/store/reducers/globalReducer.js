import {
  TOGGLE_ALERT,
  TOGGLE_LOADER,
  TOGGLE_REDIRECT,
} from '../actionTypes'

const initialState = {
  isAlert: {
    variant: '',
    severity: '',
    text: '',
    isOpen: false,
  },
  isLoader: false,
  isRedirect: false,
}

const globalReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoader: payload
      }
    case TOGGLE_ALERT:
      return {
        ...state,
        isAlert: payload
      }
    case TOGGLE_REDIRECT:
      return {
        ...state,
        isRedirect: payload
      }
    default:
      return state
  }
}

export default globalReducer