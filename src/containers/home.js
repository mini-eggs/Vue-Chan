import { connect } from "vue2-redux";
import { requestBoards } from "../actions/home";
import Home from "../scenes/home";

const mapState = ({ Home: { boards } }) => ({ boards });

const mapActions = dispatch => ({
  requestBoards: () => dispatch(requestBoards())
});

export default connect(mapState, mapActions)(Home);
