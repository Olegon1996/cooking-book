import React from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'

import { useStyles } from './style'
import CustomIconButton from '../iconButton/IconButton'

const TopAppBar = () => {
  const history = useHistory()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography
            variant='h6'
            className={classes.title}
            onClick={() => history.push('/recipes')}
          >
            Книга рецептів
          </Typography>
            <CustomIconButton
              size='medium'
              title='Додати новий рецепт'
              click={() => history.push('/add-new-recipe')}
            >
              <AddCircleOutlineOutlinedIcon
                fontSize='inherit'
                style={{fill: 'white'}}
              />
            </CustomIconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopAppBar
