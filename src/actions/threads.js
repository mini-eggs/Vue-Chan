import { getOptions } from "../constants/";

const THREAD_LIST = "THREAD_LIST";
const CLEAR_THREAD_LIST = "CLEAR_THREAD_LIST";

const getThreadsInternal = (board, page) =>
  new Promise(resolve => {
    fetch("/threads", getOptions({ board, page }))
      .then(req => req.json())
      .then(({ threads }) => resolve({ board, threads }));
  });

const requestThreads = (board, page) => dispatch => {
  getThreadsInternal(board, page).then(payload => {
    dispatch({ type: THREAD_LIST, payload });
  });
};

const refreshThreads = (board, page) => dispatch => {
  dispatch({ type: CLEAR_THREAD_LIST, payload: board });
  getThreadsInternal(board, page).then(payload => {
    dispatch({ type: THREAD_LIST, payload });
  });
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
