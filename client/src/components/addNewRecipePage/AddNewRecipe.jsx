import React, {useEffect, useState} from 'react'
import TopAppBar from '../../ui/topNavBar/TopAppBar'
import CustomTextField from '../../ui/textField/TextField'
import CustomButton from '../../ui/customButton/Button'
import {useStyles} from './style'
import {useDispatch, useSelector} from 'react-redux'
import {FETCH_RECIPE_CREATE, TOGGLE_ALERT} from '../../store/actionTypes'
import UploadFile from '../../ui/uploadFile/UploadFile'
import {useHistory} from 'react-router-dom'

const AddNewRecipe = () => {
  const classes = useStyles()
  const history = useHistory()

  const dispatch = useDispatch()
  const isRedirect = useSelector(state => state.globalState.isRedirect)

  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    image: ''
  })

  useEffect(() => {
    if (!!isRedirect) {
      history.push('/recipes')
    }
  }, [isRedirect])

  const handleChangeRecipe = (value, name) => {
    setRecipe({
      ...recipe,
      [name]: value,
    })
  }

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

  const transformData = async () => {
    const codedFile = await toBase64(recipe.image)
    const sliceIndex = codedFile.indexOf('base64,') + 7
    const base64 = codedFile.slice(sliceIndex,)
    return {
      image: base64,
      title: recipe.title,
      description: recipe.description
    }
  }

  const createRecipe = async () => {
    if (recipe.description && recipe.title && recipe.image) {
      const info = await transformData()
      dispatch({type: FETCH_RECIPE_CREATE, recipe: info})
      setRecipe({title: '', description: '', image: ''})
    } else {
      dispatch({
        type: TOGGLE_ALERT, payload: {
          variant: 'filled',
          severity: 'warning',
          text: 'Заповніть всі поля',
          isOpen: true,
        }
      })
    }
  }

  return (
    <React.Fragment>
      <TopAppBar/>
      <section className={classes.section}>
        <UploadFile
          name='image'
          file={recipe.image}
          handleFile={handleChangeRecipe}
        />
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
        <CustomButton
          text='Додати рецепт'
          click={createRecipe}
        />
      </section>
    </React.Fragment>
  )
}

export default AddNewRecipe