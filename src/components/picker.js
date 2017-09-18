const { Chrome } = require("vue-color");

const defaultProps = {
  hex: "#194d33"
};

const name = "x-picker";

const props = ["item", "handleChange"];

const data = () => ({ show: false, defaultProps });

const components = {
  "vue-color": Chrome
};

const methods = {
  toggle() {
    this.show = !this.show;
  }
};

const template = `
  <router-link class="pointer" to="?" tag="v-list-tile">
    <v-list-tile-content @click.stop="toggle">
      <v-list-tile-title>
        {{ item.name }}
      </v-list-tile-title>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-icon>mode_edit</v-icon>
    </v-list-tile-action>

    <v-dialog v-model="show" absolute persistent>
      <vue-color
        :value="defaultProps"
        @input="handleChange"
      ></vue-color>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click.stop="toggle" flat>OK</v-btn>
      </v-card-actions>
    </v-dialog>
  </router-link>
`;

export default { name, props, data, components, methods, template };
