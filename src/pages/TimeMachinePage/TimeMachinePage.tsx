import React from 'react';
import TimeMachineBoard from 'components/TimeMachineBoard/TimeMachineBoard';
import 'pages/TimeMachinePage/TimeMachinePage.css';

const TimeMachinePage = () => (
  <div className="page-content">
    <h1>Time machine</h1>
    <div className="container">
      <div className="board">
        <TimeMachineBoard size={4} />
      </div>
      <div className="info">o</div>
    </div>
  </div>
);

export default TimeMachinePage;
