import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& > div': {
      width: '70%',
      margin: '0 0 15px 0',
      display: 'flex',
      justifyContent: 'space-evenly',

      '& > button': {
        padding: '10px 25px',
        textTransform: 'inherit'
      },
    },
  },
}));


