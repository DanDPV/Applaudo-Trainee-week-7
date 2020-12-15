import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import RouteNames from 'routers/RouteNames';
import TimeMachinePage from 'pages/TimeMachinePage/TimeMachinePage';

const AppRouter = () => (
  <Router>
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Switch>
          <Route exact path={RouteNames.TicTacToe} component={GamesPage} />
          <Route path={RouteNames.Home} component={TimeMachinePage} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default AppRouter;
