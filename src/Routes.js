import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import App from './App';
import Login from './pages/Login';
import Chat from './pages/Chat';

class Routes extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;