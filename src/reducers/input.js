// @flow

import { UPDATE_SEARCH_INPUT } from "../actions/input";
// import type { ActionT } from "../types/";

const initial = {
  searchInput: ""
};

const reducer = (state = initial, action) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_SEARCH_INPUT: {
      return Object.assign({}, state, {
        searchInput: payload
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
