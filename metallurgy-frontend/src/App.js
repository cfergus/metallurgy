// import './App.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import 'typeface-roboto';
import { Main } from './layouts';
import palette from './theme/palette';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Help from './components/help';
// import QueryContainer from './components/query_container';

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

/*
<div className="App">
      <Router>
        <header className="App-header">

          <div>
            <ul>
              <li><Link to="/">Help</Link></li>
              <li><Link to="/q">Query : Toughness/Hardness</Link></li>
            </ul>
          </div>
        </header>
        <div>
          <Switch>
            <Route exact path="/">
              <Help />
            </Route>
            <Route path="/q">
              <QueryContainer/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
*/

export default App;
