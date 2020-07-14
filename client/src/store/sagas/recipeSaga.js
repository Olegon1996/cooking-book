import {put, call} from 'redux-saga/effects'
import {
  FETCH_RECIPE_CREATE_ERROR,
  FETCH_RECIPE_CREATE_SUCCESS,
  FETCH_RECIPE_DELETE_ERROR,
  FETCH_RECIPE_DELETE_SUCCESS,
  FETCH_RECIPE_EDIT_ERROR,
  FETCH_RECIPE_EDIT_SUCCESS,
  FETCH_RECIPE_ERROR,
  FETCH_RECIPE_SUCCESS,
  TOGGLE_ALERT,
  TOGGLE_LOADER, TOGGLE_REDIRECT,
} from '../actionTypes'
import {
  fetchingCreateRecipe,
  fetchingDeleteRecipe,
  fetchingEditRecipe,
  fetchingRecipes
} from '../../services/api/recipeApi'

export function* fetchAll(value) {
  try {
    yield put({type: TOGGLE_LOADER, payload: true})
    const response = yield call(fetchingRecipes, value)
    const sortedRecipes = response.recipes.sort((a, b) => a.createdDate > b.createdDate ? -1 : 1)

    yield put({
      type: FETCH_RECIPE_SUCCESS,
      payload: {
        recipes: sortedRecipes,
        pages: response.pages
      }
    })
    yield put({type: TOGGLE_LOADER, payload: false})
  } catch (e) {
    yield put({type: TOGGLE_LOADER, payload: false})
    yield put({type: FETCH_RECIPE_ERROR})
  }
}

export function* fetchCreate(recipe) {
  try {
    yield put({type: TOGGLE_LOADER, payload: true})
    const response = yield call(fetchingCreateRecipe, recipe)
    yield put({type: FETCH_RECIPE_CREATE_SUCCESS, payload: response.recipe[0]})
    yield put({type: TOGGLE_LOADER, payload: false})
    yield put({
      type: TOGGLE_ALERT, payload: {
        variant: 'filled',
        severity: 'success',
        text: 'Рецепт створено',
        isOpen: true,
      }
    })
    yield put({type: TOGGLE_REDIRECT, payload: true})
    yield put({type: TOGGLE_REDIRECT, payload: false})
  } catch (e) {
    yield put({type: TOGGLE_LOADER, payload: false})
    yield put({type: FETCH_RECIPE_CREATE_ERROR})
    yield put({
      type: TOGGLE_ALERT, payload: {
        variant: 'filled',
        severity: 'error',
        text: 'Щось пішло не так!',
        isOpen: true,
      }
    })
  }
}

export function* fetchEdit(payload) {
  try {
    yield put({type: TOGGLE_LOADER, payload: true})
    const response = yield call(fetchingEditRecipe, payload)
    yield put({type: FETCH_RECIPE_EDIT_SUCCESS, payload: response.recipe[0]})
    yield put({type: TOGGLE_LOADER, payload: false})
    yield put({
      type: TOGGLE_ALERT, payload: {
        variant: 'filled',
        severity: 'success',
        text: 'Рецепт оновлено',
        isOpen: true,
      }
    })
    yield put({type: TOGGLE_REDIRECT, payload: true})
    yield put({type: TOGGLE_REDIRECT, payload: false})
  } catch (e) {
    yield put({type: TOGGLE_LOADER, payload: false})
    yield put({type: FETCH_RECIPE_EDIT_ERROR})
    yield put({
      type: TOGGLE_ALERT, payload: {
        variant: 'filled',
        severity: 'error',
        text: 'Щось пішло не так!',
        isOpen: true,
      }
    })
  }
}

export function* fetchDelete(id) {
  try {
    yield put({type: TOGGLE_LOADER, payload: true})
    const response = yield call(fetchingDeleteRecipe, id)
    yield put({type: FETCH_RECIPE_DELETE_SUCCESS, payload: response.id})
    yield put({type: TOGGLE_LOADER, payload: false})
    yield put({
      type: TOGGLE_ALERT, payload: {
        variant: 'filled',
        severity: 'success',
        text: 'Рецепт видалено',
        isOpen: true,
      }
    })
    yield put({type: TOGGLE_REDIRECT, payload: true})
    yield put({type: TOGGLE_REDIRECT, payload: false})
  } catch (e) {
    yield put({type: TOGGLE_LOADER, payload: false})
    yield put({type: FETCH_RECIPE_DELETE_ERROR})
    yield put({
      type: TOGGLE_ALERT, payload: {
        variant: 'filled',
        severity: 'error',
        text: 'Щось пішло не так!',
        isOpen: true,
      }
    })
  }
}