import React from 'react';
import TimeMachineBoard from 'components/TimeMachineBoard';

const TimeMachinePage = () => (
  <div className="page-content">
    <h1>Time machine</h1>
    <div className="container">
      <div className="board">
        <TimeMachineBoard />
      </div>
      <div className="info">o</div>
    </div>
  </div>
);

export default TimeMachinePage;
