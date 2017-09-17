// import type { DispatchT } from "../types/";
import { getOptions } from "../constants/";

const THREAD_LIST = "THREAD_LIST";
const CLEAR_THREAD_LIST = "CLEAR_THREAD_LIST";

const getThreadsInternal = async (board, page) => {
  const req = await fetch("/threads", getOptions({ board, page }));
  const { threads } = await req.json();
  return { board, threads };
};

const requestThreads = (board, page) => async dispatch => {
  const payload = await getThreadsInternal(board, page);
  dispatch({ type: THREAD_LIST, payload });
};

const refreshThreads = (board, page) => async dispatch => {
  dispatch({ type: CLEAR_THREAD_LIST, payload: board });
  const payload = await getThreadsInternal(board, page);
  dispatch({ type: THREAD_LIST, payload });
};

const clearThreads = board => ({
  type: CLEAR_THREAD_LIST,
  payload: board
});

export {
  THREAD_LIST,
  CLEAR_THREAD_LIST,
  requestThreads,
  refreshThreads,
  clearThreads
};
