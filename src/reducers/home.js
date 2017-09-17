// @flow

import { BOARD_LIST, BOARD_CLEAR } from "../actions/home";
import type { ActionT, BoardT } from "../types/";

type StateT = {|
  boards: Array<BoardT>
|};

const initial: StateT = {
  boards: []
};

function reducer(state: StateT = initial, action: ActionT) {
  const { type, payload } = action;

  switch (type) {
    case BOARD_LIST: {
      return {
        ...state,
        boards: payload
      };
    }
    case BOARD_CLEAR: {
      return {
        ...state,
        boards: []
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
