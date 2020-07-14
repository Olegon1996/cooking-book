import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import TopAppBar from '../../ui/topNavBar/TopAppBar'
import Item from '../../ui/item/Item'
import {FETCH_RECIPE} from '../../store/actionTypes'
import {useStyles} from './style'
import CustomPagination from "../../ui/pagination/Pagination";

const Recipes = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const recipes = useSelector(state => state.recipesState.recipes)
  const pages = useSelector(state => state.recipesState.pages)

  useEffect(() => {
    if(recipes.length > 0) return
    dispatch({type: FETCH_RECIPE, value: 1})
  }, [dispatch, recipes.length])

  const handleChange = useCallback((value=1) => {
    dispatch({type: FETCH_RECIPE, value})
  }, [dispatch])

  return (
    <React.Fragment>
      <TopAppBar/>
      <section className={classes.root}>
        {
          recipes.map(recipe => (
            <Item
              key={recipe.id}
              img={recipe.image || 'https://img.povar.ru/main/45/e4/2c/87/tort_quotastoriyaquot-520471.JPG'}
              title={recipe.title}
              id={recipe.id}
              createdDate={new Date(recipe.createdDate)}
              description={recipe.description}
            />
          ))
        }
      </section>
      {
        !!recipes.length
          ? <CustomPagination color='secondary' count={pages || 1} handleChange={handleChange}/>
          : <h3 className={classes.h3}>Рецептів поки немає. Ви можете створити перший :)</h3>
      }
    </React.Fragment>
  )
}

export default Recipes