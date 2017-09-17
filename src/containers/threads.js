// @flow

import { connect } from "vue2-redux";
import {
  requestThreads,
  clearThreads,
  refreshThreads
} from "../actions/threads";
import Threads from "../scenes/threads";

const mapState = ({ Threads: { boards } }) => ({ boards });

const mapActions = dispatch => ({
  requestThreads: (board, page) => dispatch(requestThreads(board, page)),
  refreshThreads: (board, page = 1) => dispatch(refreshThreads(board, page)),
  clearThreads: board => dispatch(clearThreads(board))
});

export default connect(mapState, mapActions)(Threads);
