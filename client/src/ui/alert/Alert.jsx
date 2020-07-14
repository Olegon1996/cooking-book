import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useStyles} from './style';
import {useDispatch, useSelector} from "react-redux";
import {TOGGLE_ALERT} from "../../store/actionTypes";

const CustomAlert = ({autoHideDuration, elevation}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const isAlert = useSelector(state => state.globalState.isAlert)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({type: TOGGLE_ALERT, payload: {
        variant: '',
        severity: '',
        text: '',
        isOpen: false,
      }})
  };

  return (
      <Snackbar open={isAlert.isOpen} autoHideDuration={autoHideDuration} onClose={handleClose}>
        <MuiAlert
          elevation={elevation}
          variant={isAlert.variant}
          onClose={handleClose}
          severity={isAlert.severity}
        >
          {isAlert.text}
        </MuiAlert>
      </Snackbar>
  )
}

export default CustomAlert
