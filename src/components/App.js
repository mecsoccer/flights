import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Signin from './Signin';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route path="/" exact component={Signin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
