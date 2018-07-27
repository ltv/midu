import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';

const HW = () => <div>Hello World</div>


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HW} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
