import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HelpPage from './pages/HelpPage';
import SteelsPage from './pages/SteelsPage';
import SteelPage from './pages/SteelPage';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  // uri: 'http://graphql-engine:8080/v1/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App>
          <Switch>
            <Redirect exact from="/" to="/welcome" />
            <Route key="welcome" exact path="/welcome" component={WelcomePage} />
            <Route key="help" path="/help" component={HelpPage} />
            <Route key="steels" exact path="/steels" component={SteelsPage} />
            <Route key="steel" path="/steels/:id" component={SteelPage} />
            {/* <Route key="table" path="/user/:id" component={UsersPage} /> */}
            <Redirect to="/welcome" />
          </Switch>
        </App>
      </BrowserRouter>
    </ApolloProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
