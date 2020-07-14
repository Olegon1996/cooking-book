import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 100,

    '& > div ': {
      width: '90%',
      maxWidth: 900,

      '& > div': {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',

        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        },

        '& > button': {
          position: 'absolute',
          top: 0,
          right: 0
        },

        '& > div:first-child': {
          [theme.breakpoints.down('sm')]: {
            marginBottom: 50,
          },

          '& > p': {
            margin: '5px 5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '&:last-child': {
              color: 'gray',
              fontSize: 14,
            }

          },
          '& > img': {
            width: 300,
          }
        },

        '& > div:last-child': {
          height: '100%',
          width: '57%',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 30,

          [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          },

          '& > h2': {
            margin: '0 0 10px 0',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },

          '& > p': {
            wordBreak: 'break-all',

            '& > button': {
              padding: '4px 8px',
              fontSize: 10,
              marginLeft: 10
            }
          }
        }
      }
    }
  },
  h3: {
    textAlign: 'center',
  },
}));