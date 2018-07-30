import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';
import indexRoutes from './routes/index.jsx';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
