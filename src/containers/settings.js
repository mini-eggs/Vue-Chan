import { saveTheme } from "../actions/settings";
import Settings from "../scenes/settings";

const { connect } = require("vue2-redux");

const mapState = ({ Settings: { theme } }) => ({ theme });

const mapActions = dispatch => ({
  saveTheme: theme => dispatch(saveTheme(theme))
});

export default connect(mapState, mapActions)(Settings);
