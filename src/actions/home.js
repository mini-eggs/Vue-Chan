// @flow

import type { DispatchT } from "../types/";

const BOARD_LIST = "BOARD_LIST";
const BOARD_CLEAR = "BOARD_CLEAR";

const getBoardsInternal = async () => {
  const req = await fetch("/boards");
  return await req.json();
};

const requestBoards = () => async (dispatch: DispatchT) => {
  const { boards } = await getBoardsInternal();
  dispatch({ type: BOARD_LIST, payload: boards });
};

const refreshBoards = () => async (dispatch: DispatchT) => {
  dispatch({ type: BOARD_CLEAR });
  const { boards } = await getBoardsInternal();
  dispatch({ type: BOARD_LIST, payload: boards });
};

export { BOARD_LIST, BOARD_CLEAR, requestBoards, refreshBoards };
