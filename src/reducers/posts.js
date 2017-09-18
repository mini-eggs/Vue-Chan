import { POST_LIST, CLEAR_POST_LIST } from "../actions/posts";
import { formatPostList } from "../constants/";

const initial = {
  threads: {}
};

const reducer = (state = initial, action) => {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case POST_LIST: {
      const nextThreads = Object.assign({}, state.threads);
      nextThreads[payload.thread] = formatPostList(
        payload.board,
        payload.posts
      );
      return Object.assign({}, state, { threads: nextThreads });
    }
    case CLEAR_POST_LIST: {
      const nextThreads = Object.assign({}, state.threads);
      nextThreads[payload.thread] = [];
      return Object.assign({}, state, { threads: nextThreads });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
