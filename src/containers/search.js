// @flow

import { updateSearchInput } from "../actions/input";
import Search from "../components/search";

const { connect } = require("vue2-redux");

const mapState = ({ Settings: { theme } }) => ({ theme });

const mapActions = dispatch => ({
  updateSearchInput: value => dispatch(updateSearchInput(value))
});

export default connect(mapState, mapActions)(Search);
