// @flow

import { UPDATE_SEARCH_INPUT } from "../actions/input";
import type { ActionT } from "../types/";

type StateT = {|
  searchInput: string
|};

const initial = {
  searchInput: ""
};

const reducer = (state: StateT = initial, action: ActionT) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_SEARCH_INPUT: {
      return {
        ...state,
        searchInput: payload
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
