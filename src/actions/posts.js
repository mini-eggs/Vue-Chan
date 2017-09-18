import { getOptions } from "../constants/";

const POST_LIST = "POST_LIST";
const CLEAR_POST_LIST = "CLEAR_POST_LIST";

const getPostsInternal = (board, thread) =>
  new Promise(resolve => {
    fetch("/posts", getOptions({ board, thread }))
      .then(req => req.json())
      .then(({ posts }) => resolve({ board, thread, posts }));
  });

const requestPosts = (board, thread) => dispatch => {
  getPostsInternal(board, thread).then(payload => {
    dispatch({ type: POST_LIST, payload });
  });
};

const refreshPosts = (board, thread) => dispatch => {
  dispatch({ type: CLEAR_POST_LIST, payload: { board, thread } });
  getPostsInternal(board, thread).then(payload => {
    dispatch({ type: POST_LIST, payload });
  });
};

const clearPosts = (board, thread) => ({
  type: CLEAR_POST_LIST,
  payload: { board, thread }
});

export { POST_LIST, CLEAR_POST_LIST, requestPosts, refreshPosts, clearPosts };
