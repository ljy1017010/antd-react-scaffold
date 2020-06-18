import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './main.css';

const login = lazy(() => import('@src/views/Login'));
const about = lazy(() => import('@src/views/About'));

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login" component={login} />
            <Route path="/about" component={about} />
            <Route path="/">
              <Redirect from="/" to="/login" />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default Main;
