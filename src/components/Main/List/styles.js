import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles(() => ({
  avatarIncome: {
    color: green[500],
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: red[500],
    //color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));