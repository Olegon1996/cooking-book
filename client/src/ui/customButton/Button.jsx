import React from 'react'
import Button from '@material-ui/core/Button'

const CustomButton = ({variant, color, text, click}) => {

  return (
    <Button
      variant={variant}
      color={color}
      onClick={click}
    >
      {text}
    </Button>
  )
}

export default CustomButton