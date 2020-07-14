import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import {useStyles} from './style'

const CustomPagination = ({count, color, handleChange}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        color={color}
        onChange={(e, value) => handleChange(value)}/>
    </div>
  )
}

export default CustomPagination