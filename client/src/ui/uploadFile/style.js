import {createStyles, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '10px 0',
      '& > label': {
        '& > div': {
          background: '#EDEDED',
          border: '1px dashed #BBBBBB',
          boxSizing: 'border-box',
          borderRadius: '5px',
          padding: '20px 0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& > div': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '65px',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '19px',
            lineHeight: '17px',
            color: '#2E3841',
            opacity: '0.8'
          }
        }
      }
    },
    input: {
      display: 'none',
    },
  }),
);