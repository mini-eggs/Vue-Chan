import { connect } from "vue2-redux";
import { saveTheme } from "../actions/settings";
import Settings from "../scenes/settings";

const mapState = ({ Settings: { theme } }) => ({ theme });

const mapActions = dispatch => ({
  saveTheme: theme => dispatch(saveTheme(theme))
});

export default connect(mapState, mapActions)(Settings);
