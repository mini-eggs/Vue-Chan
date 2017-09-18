import { BOARD_LIST, BOARD_CLEAR } from "../actions/home";

const initial = {
  boards: []
};

const formatBoard = item =>
  Object.assign({}, item, {
    meta_description: item.meta_description.replace(
      `&quot;/${item.board}/ - ${item.title}&quot; is`,
      ""
    )
  });

function reducer(state = initial, action) {
  const { type, payload } = action;

  switch (type) {
    case BOARD_LIST: {
      return Object.assign({}, state, {
        boards: payload.map(formatBoard)
      });
    }
    case BOARD_CLEAR: {
      return Object.assign({}, state, {
        boards: []
      });
    }
    default: {
      return state;
    }
  }
}

export default reducer;
