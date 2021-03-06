// @flow

import { updateSearchInput } from "../actions/input";
import { requestBoards, refreshBoards } from "../actions/home";
import Home from "../scenes/home";

const { connect } = require("vue2-redux");

const filterBoards = (boards, input) =>
  boards.filter(board => {
    const name = board.board.toLowerCase();
    const title = board.title.toLowerCase();
    const find = input.toLowerCase();
    return input === ""
      ? true
      : name.indexOf(find) > -1 || title.indexOf(find) > -1;
  });

const mapState = ({ Home: { boards }, Input: { searchInput } }) => ({
  boards: filterBoards(boards, searchInput),
  searchInput: searchInput
});

const mapActions = dispatch => ({
  requestBoards: () => dispatch(requestBoards()),
  refreshBoards: () => dispatch(refreshBoards()),
  clearSearchInput: () => dispatch(updateSearchInput(""))
});

export default connect(mapState, mapActions)(Home);
