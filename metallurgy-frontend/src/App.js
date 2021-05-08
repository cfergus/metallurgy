// import './App.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import 'typeface-roboto';
import { Main } from './layouts';
import palette from './theme/palette';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '-8px',
    backgroundColor: palette.primary.light,
  },
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <div className={classes.root}>
          <div>{children}</div>
        </div>
      </Main>
    </ThemeProvider>
  );
};

function App({children}) {
  return (
    <AppLayout>{children}</AppLayout>
  );
}


export default App;
