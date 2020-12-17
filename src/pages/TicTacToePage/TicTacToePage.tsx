/* eslint no-unused-vars: 0 */
/* eslint no-await-in-loop: 0 */
import TicTacToeBoard from 'components/TicTacToeBoard/TicTacToeBoard';
import TicTacToeMenu from 'components/TicTacToeMenu/TicTacToeMenu';
import useTimeMachine from 'hooks/useTimeMachine';
import React, { useEffect, useReducer, Reducer } from 'react';
import { calculateTicTacToeWinner, sleep } from 'utils/utils';
import ticTacToeReducer from 'reducers/ticTacToeReducer/ticTacToeReducer';
import ticTacToeInitialState from 'reducers/ticTacToeReducer/ticTacToeInitialState';
import ITicTacToeReducerState from 'reducers/ticTacToeReducer/ITicTacToeReducerState';
import ITicTacToeReducerAction from 'reducers/ticTacToeReducer/ITicTacToeReducerAction';
import ticTacToeActionsTypes from 'reducers/ticTacToeReducer/ticTacToeActionsTypes';
import 'pages/TicTacToePage/TicTacToePage.css';

const TicTacToePage = () => {
  const [state, dispatch] = useReducer<
    Reducer<ITicTacToeReducerState, ITicTacToeReducerAction>
  >(ticTacToeReducer, ticTacToeInitialState);

  const {
    winner,
    error,
    currentPosition,
    xIsNext,
    isTraveling,
    isReplaying,
    squares,
    historySquares,
  } = state;

  const [, getPreviousValue, timeLength, reset] = useTimeMachine(historySquares);

  const handleClick = (position: number) => {
    dispatch({
      type: ticTacToeActionsTypes.SET_ERROR,
      payload: { error: '' },
    });
    if (!isTraveling) {
      if (historySquares) {
        const newSquares = historySquares.slice();

        if (calculateTicTacToeWinner(historySquares) || !historySquares.includes(null)) {
          dispatch({
            type: ticTacToeActionsTypes.SET_ERROR,
            payload: { error: 'The game has ended' },
          });
          return;
        }

        if (historySquares[position]) {
          dispatch({
            type: ticTacToeActionsTypes.SET_ERROR,
            payload: { error: 'That position is already taken' },
          });
          return;
        }

        newSquares[position] = xIsNext ? 'x' : 'o';
        dispatch({
          type: ticTacToeActionsTypes.SET_NEXT_PLAY,
          payload: {
            xIsNext: !xIsNext,
            squares: newSquares,
          },
        });
      }
    } else {
      dispatch({
        type: ticTacToeActionsTypes.SET_ERROR,
        payload: { error: 'You can not alter time events!' },
      });
    }
  };

  const handleGetPrevious = (step: number) => {
    if (currentPosition !== undefined) {
      const newPosition = currentPosition + step;
      let newIsTraveling = false;

      if (newPosition !== 0) {
        newIsTraveling = true;
      } else {
        newIsTraveling = false;
      }
      dispatch({
        type: ticTacToeActionsTypes.MOVE_IN_TIME,
        payload: {
          currentPosition: newPosition,
          isTraveling: newIsTraveling,
          squares: getPreviousValue(newPosition) ?? ticTacToeInitialState.squares,
        },
      });
    }
  };

  const handleResume = () => {
    dispatch({
      type: ticTacToeActionsTypes.MOVE_IN_TIME,
      payload: {
        currentPosition: 0,
        isTraveling: false,
        squares: getPreviousValue(0) ?? ticTacToeInitialState.squares,
      },
    });
  };

  const handleReset = () => {
    reset();
    dispatch({
      type: ticTacToeActionsTypes.RESET,
      payload: {},
    });
  };

  const handleReplay = async () => {
    dispatch({
      type: ticTacToeActionsTypes.REPLAY,
      payload: {
        isTraveling: true,
        isReplaying: true,
      },
    });
    const firstPos = timeLength - 1;
    dispatch({
      type: ticTacToeActionsTypes.MOVE_IN_TIME,
      payload: {
        currentPosition: firstPos,
        isTraveling: true,
        squares: getPreviousValue(firstPos) ?? ticTacToeInitialState.squares,
      },
    });
    for (let position = firstPos - 1; position >= 0; position -= 1) {
      await sleep(500).then(() => {
        dispatch({
          type: ticTacToeActionsTypes.MOVE_IN_TIME,
          payload: {
            currentPosition: position,
            isTraveling: true,
            squares: getPreviousValue(position) ?? ticTacToeInitialState.squares,
          },
        });
      });
    }
    dispatch({
      type: ticTacToeActionsTypes.REPLAY,
      payload: {
        isTraveling: false,
        isReplaying: false,
      },
    });
  };

  useEffect(() => {
    if (historySquares) {
      if (calculateTicTacToeWinner(historySquares)) {
        dispatch({
          type: ticTacToeActionsTypes.SET_WINNER,
          payload: {
            winner: calculateTicTacToeWinner(historySquares),
          },
        });
      } else if (!historySquares.includes(null)) {
        dispatch({
          type: ticTacToeActionsTypes.SET_WINNER,
          payload: {
            winner: 'it\'s a tie',
          },
        });
      }
    }
  }, [historySquares]);

  return (
    <div className="page-content">
      <h1 className="tic-tac-toe-title">Tic Tac Toe</h1>
      <div className="tic-tac-toe-messages">
        <h5 className="tic-tac-toe-is-traveling">
          {isTraveling
            ? 'You are now traveling in time'
            : 'You are currently in present'}
        </h5>
        {winner && !isReplaying && (
          <h5 className="tic-tac-toe-winner">{`The winner is: ${winner}`}</h5>
        )}
        {error && !isReplaying && (
          <h5 className="tic-tac-toe-error">{error}</h5>
        )}
        {isReplaying && <h5>Replaying...</h5>}
      </div>
      <div className="container">
        <div className="board">
          <TicTacToeBoard
            squares={squares}
            handleClick={handleClick}
            isTraveling={isTraveling}
          />
        </div>
        <div className="info">
          <TicTacToeMenu
            getPreviousValue={handleGetPrevious}
            handleResume={handleResume}
            handleReset={handleReset}
            handleReplay={handleReplay}
            currentPosition={currentPosition}
            timeLength={timeLength}
            xIsNext={xIsNext}
            winner={winner}
            isReplaying={isReplaying}
          />
        </div>
      </div>
    </div>
  );
};

export default TicTacToePage;
