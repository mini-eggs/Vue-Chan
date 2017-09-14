const BOARD_LIST = "BOARD_LIST";

const requestBoards = () => async dispatch => {
  const req = await fetch("/boards");
  const data = await req.json();
  dispatch({ type: BOARD_LIST, payload: data.boards });
};

export { BOARD_LIST, requestBoards };
