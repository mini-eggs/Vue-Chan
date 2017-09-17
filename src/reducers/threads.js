import { THREAD_LIST, CLEAR_THREAD_LIST } from "../actions/threads";
import { formatThreadList } from "../constants/";

const initial = {
  boards: {}
};

const reducer = (state = initial, action) => {
  const { payload, type } = action;
  switch (type) {
    case THREAD_LIST: {
      const nextBoards = { ...state.boards };
      nextBoards[payload.board] = formatThreadList(
        payload.board,
        payload.threads
      );
      return { ...state, boards: nextBoards };
    }
    case CLEAR_THREAD_LIST: {
      const nextBoards = { ...state.boards };
      nextBoards[payload] = [];
      return { ...state, boards: nextBoards };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
