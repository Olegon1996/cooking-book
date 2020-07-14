import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import TopAppBar from '../../ui/topNavBar/TopAppBar'
import CustomTextField from '../../ui/textField/TextField'
import CustomButton from '../../ui/customButton/Button'
import {useStyles} from './style'
import {FETCH_RECIPE_DELETE, FETCH_RECIPE_EDIT} from '../../store/actionTypes'

const EditRecipe = () => {
  const params = useParams()
  const history = useHistory()
  const recipes = useSelector(state => state.recipesState.recipes)
  const isRedirect = useSelector(state => state.globalState.isRedirect)
  const dispatch = useDispatch()
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
  })
  const classes = useStyles()

  useEffect(() => {
    if (!!recipes.length) {
      const recipe = recipes.find(r => r.id === params.id.slice(1,))
      setRecipe({
        title: recipe.title,
        description: recipe.description,
      })
    } else {
      history.push('/')
    }
  }, [params])

  useEffect(() => {
    if(!!isRedirect) {
      history.push('/recipes')
    }
  }, [isRedirect])

  const handleChangeRecipe = (value, name) => {
    setRecipe({
      ...recipe,
      [name]: value,
    })
  }

  const editRecipe = () => {
    dispatch({type: FETCH_RECIPE_EDIT, payload: {recipe: recipe, id: params.id.slice(1,)}})
  }

  const deleteRecipe = () => {
    dispatch({type: FETCH_RECIPE_DELETE, id: params.id.slice(1,)})
    history.push('/recipes')
  }

  return (
    <React.Fragment>
      <TopAppBar/>
      <section className={classes.section}>
        <CustomTextField
          name='title'
          value={recipe.title}
          change={handleChangeRecipe}
          label='Назва рецепту'
          variant='outlined'
          color='secondary'
        />
        <CustomTextField
          name='description'
          value={recipe.description}
          change={handleChangeRecipe}
          label='Процес приготування'
          variant='outlined'
          color='secondary'
          rows={8}
        />
        <div>
          <CustomButton
            text='Оновити рецепт'
            click={editRecipe}
            color='secondary'
            variant='outlined'
          />
          <CustomButton
            text='Видалити рецепт'
            click={deleteRecipe}
            variant='outlined'
          />
        </div>
      </section>
    </React.Fragment>
  )
}

export default EditRecipe