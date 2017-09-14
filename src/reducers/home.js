import { BOARD_LIST } from "../actions/home";

const initial = {
  boards: []
};

function reducer(state = initial, { type, payload }) {
  switch (type) {
    case BOARD_LIST: {
      return {
        ...state,
        boards: payload
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
