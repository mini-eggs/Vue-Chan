import Picker from "../components/picker";

const name = "x-settings";

const data = () => ({
  types: [
    { name: "Header Background Color", value: "hbc" },
    { name: "Header Text Color", value: "htc" },
    { name: "Body Background Color", value: "bbc" },
    { name: "Body Text Color", value: "btc" }
  ]
});

const components = {
  "x-picker": Picker
};

const methods = {
  handleChange(type) {
    return ({ rgba }) => {
      const theme = this.theme;
      const nextTheme = {};
      nextTheme[type] = rgba;
      this.saveTheme(Object.assign({}, theme, nextTheme));
    };
  }
};

const template = `
  <div id="settings">
    <h5>Theme</h5>
    <v-list>
      <x-picker
        v-for="(item, index) in types"
        :key="index"
        :item="item"
        :handleChange="handleChange(item.value)"
      ></x-picker>
    </v-list>
  </div>
`;

export default { name, data, components, methods, template };
