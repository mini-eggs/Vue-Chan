import { getOptions } from "../constants/";

const POST_LIST = "POST_LIST";
const CLEAR_POST_LIST = "CLEAR_POST_LIST";

const getPostsInternal = async (board, thread) => {
  const req = await fetch("/posts", getOptions({ board, thread }));
  const { posts } = await req.json();
  return { board, thread, posts };
};

const requestPosts = (board, thread) => async dispatch => {
  const payload = await getPostsInternal(board, thread);
  dispatch({ type: POST_LIST, payload });
};

const refreshPosts = (board, thread) => async dispatch => {
  dispatch({ type: CLEAR_POST_LIST, payload: { board, thread } });
  const payload = await getPostsInternal(board, thread);
  dispatch({ type: POST_LIST, payload });
};

const clearPosts = (board, thread) => ({
  type: CLEAR_POST_LIST,
  payload: { board, thread }
});

export { POST_LIST, CLEAR_POST_LIST, requestPosts, refreshPosts, clearPosts };
