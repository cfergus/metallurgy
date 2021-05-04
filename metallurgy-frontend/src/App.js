import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Help from './components/help';
import QueryContainer from './components/query_container';

function App() {
  return (
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
  );
}

export default App;
