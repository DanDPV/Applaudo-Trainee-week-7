import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import RouteNames from 'routers/RouteNames';
import Navbar from 'components/Navbar/Navbar';
import Loading from 'components/Loading/Loading';
import 'routers/AppRouter/AppRouter.scss';

const TimeMachinePage = lazy(() => import('pages/TimeMachinePage/TimeMachinePage'));
const TicTacToePage = lazy(() => import('pages/TicTacToePage/TicTacToePage'));

const AppRouter = () => (
  <Router>
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={RouteNames.TicTacToe} component={TicTacToePage} />
            <Route path={RouteNames.Home} component={TimeMachinePage} />
          </Switch>
        </Suspense>
      </div>
    </div>
  </Router>
);

export default AppRouter;
