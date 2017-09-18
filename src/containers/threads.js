import {
  requestThreads,
  clearThreads,
  refreshThreads
} from "../actions/threads";
import Threads from "../scenes/threads";

const { connect } = require("vue2-redux");

const mapState = ({ Threads: { boards } }) => ({ boards });

const mapActions = dispatch => ({
  requestThreads: (board, page) => dispatch(requestThreads(board, page)),
  refreshThreads: (board, page = 1) => dispatch(refreshThreads(board, page)),
  clearThreads: board => dispatch(clearThreads(board))
});

export default connect(mapState, mapActions)(Threads);
