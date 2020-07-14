import { takeEvery } from 'redux-saga/effects'
import {
  FETCH_RECIPE,
  FETCH_RECIPE_CREATE,
  FETCH_RECIPE_DELETE,
  FETCH_RECIPE_EDIT
} from './actionTypes'
import {
  fetchAll,
  fetchCreate,
  fetchDelete,
  fetchEdit
} from './sagas/recipeSaga'

function* rootSaga() {
  yield takeEvery(FETCH_RECIPE, fetchAll)
  yield takeEvery(FETCH_RECIPE_CREATE, fetchCreate)
  yield takeEvery(FETCH_RECIPE_EDIT, fetchEdit)
  yield takeEvery(FETCH_RECIPE_DELETE, fetchDelete)
}

export default rootSaga