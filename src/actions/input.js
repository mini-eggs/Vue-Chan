const UPDATE_SEARCH_INPUT = "UPDATE_SEARCH_INPUT";

const updateSearchInput = input => ({
  type: UPDATE_SEARCH_INPUT,
  payload: input
});

export { UPDATE_SEARCH_INPUT, updateSearchInput };
