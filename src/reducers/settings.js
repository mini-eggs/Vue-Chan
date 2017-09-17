import { SAVE_THEME } from "../actions/settings";

const initial = {
  theme: {}
};

const reducer = (state = initial, action) => {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case SAVE_THEME: {
      return {
        ...state,
        theme: payload
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
