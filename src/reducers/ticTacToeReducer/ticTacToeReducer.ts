import ticTacToeActionsTypes from 'reducers/ticTacToeReducer/ticTacToeActionsTypes';

const ticTacToeReducer = (
  state = [],
  action: {
    type: ticTacToeActionsTypes;
    payload: any;
  }
) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'replace':
      return action.payload;

    default:
      return state;
  }
};

export default ticTacToeReducer;
