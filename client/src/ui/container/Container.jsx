import React from 'react'
import Paper from '@material-ui/core/Paper'

import { useStyles } from './style'

const Container = ({elevation, children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={elevation}>
        {children}
      </Paper>
    </div>
  )
}

export default Container
