import React from 'react'
import {useHistory} from 'react-router-dom'

import { useStyles } from './style'
import Container from '../../ui/container/Container'
import CustomButton from '../../ui/customButton/Button';

const Welcome = () => {
  const history = useHistory()
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Container elevation={1}>
        <p>
          Привіт!<br/> Це онлайн книга рецептів.
          З нами Ви приготуєте багато смаколиків.<br/>
          Для перегляду натисніть Увійти
        </p>
        <CustomButton
          variant='outlined'
          color='secondary'
          text='Увійти'
          click={() => history.push('/recipes')}
        />
      </Container>
    </section>
  )
}

export default Welcome