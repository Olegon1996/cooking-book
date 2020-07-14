import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    background: '#f2edd9',

    '& > div > div': {
      '& > p': {
        textAlign: 'center',
        lineHeight: '35px',
        margin: '10px 15px 20px 15px',
      },

      '& > button': {
        textTransform: 'capitalize',
        padding: '5px 25px',
      }
    }
  },
}));