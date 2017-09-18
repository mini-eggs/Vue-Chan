import { SAVE_THEME } from "../actions/settings";

const initial = {
  theme: {
    hbc: {
      r: 0,
      g: 0,
      b: 255,
      a: 1
    },
    htc: {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    },
    bbc: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    btc: {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }
  }
};

const reducer = (state = initial, action) => {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case SAVE_THEME: {
      return Object.assign({}, state, { theme: payload });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
