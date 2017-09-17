// @flow

import { connect } from "vue2-redux";
import { updateSearchInput } from "../actions/input";
import Search from "../components/search";

const mapState = ({ Settings: { theme } }) => ({ theme });

const mapActions = dispatch => ({
  updateSearchInput: value => dispatch(updateSearchInput(value))
});

export default connect(mapState, mapActions)(Search);
