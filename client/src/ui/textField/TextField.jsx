import React from 'react'
import TextField from '@material-ui/core/TextField'

const CustomTextField = ({label, variant, change, value, name, rows, color}) => {

  return (
      <TextField
        label={label}
        variant={variant}
        value={value}
        name={name}
        rows={rows}
        multiline
        color={color}
        onChange={(e) => change(e.target.value, name)}
      />
  )
}

export default CustomTextField
