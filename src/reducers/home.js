// @flow

import { BOARD_LIST, BOARD_CLEAR } from "../actions/home";
import type { ActionT, BoardT } from "../types/";

type StateT = {|
  boards: Array<BoardT>
|};

const initial: StateT = {
  boards: []
};

const formatBoard = (item: BoardT): BoardT => ({
  ...item,
  meta_description: item.meta_description.replace(
    `&quot;/${item.board}/ - ${item.title}&quot; is`,
    ""
  )
});

function reducer(state: StateT = initial, action: ActionT) {
  const { type, payload } = action;

  switch (type) {
    case BOARD_LIST: {
      return {
        ...state,
        boards: payload.map(formatBoard)
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
