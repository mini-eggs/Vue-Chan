const BOARD_LIST = "BOARD_LIST";
const BOARD_CLEAR = "BOARD_CLEAR";

const getBoardsInternal = () =>
  new Promise(resolve => {
    fetch("/boards")
      .then(req => req.json())
      .then(resolve);
  });

const requestBoards = () => dispatch => {
  getBoardsInternal().then(({ boards }) => {
    dispatch({ type: BOARD_LIST, payload: boards });
  });
};

const refreshBoards = () => dispatch => {
  dispatch({ type: BOARD_CLEAR });
  getBoardsInternal().then(({ boards }) => {
    dispatch({ type: BOARD_LIST, payload: boards });
  });
};

export { BOARD_LIST, BOARD_CLEAR, requestBoards, refreshBoards };
