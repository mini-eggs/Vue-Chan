import { requestPosts, refreshPosts, clearPosts } from "../actions/posts";
import Posts from "../scenes/posts";

const { connect } = require("vue2-redux");

const mapState = ({ Posts: { threads } }) => ({ threads });

const mapActions = dispatch => ({
  requestPosts: (board, thread) => dispatch(requestPosts(board, thread)),
  refreshPosts: (board, thread) => dispatch(refreshPosts(board, thread)),
  clearPosts: (board, thread) => dispatch(clearPosts(board, thread))
});

export default connect(mapState, mapActions)(Posts);
