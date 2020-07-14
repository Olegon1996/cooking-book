import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

const CustomIconButton = ({size, children, click, title}) => {
  return (
    <Tooltip title={title}>
      <IconButton
        size={size}
        onClick={() => click()}
      >
        {children}
      </IconButton>
    </Tooltip>

  )
}

export default CustomIconButton