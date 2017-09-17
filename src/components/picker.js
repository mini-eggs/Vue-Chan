const name = "x-picker";

const props = ["title", "value", "list", "onChange"];

const data = () => ({ currentValue: "" });

function mounted() {
  this.currentValue = this.list[0].name;
}

const methods = {
  filter(list) {
    return list;
  }
};

const template = `
  <md-input-container>
    <label>{{ title }}</label>
    <md-autocomplete 
      v-model="currentValue" 
      :list="list"
      :filter-list="filter"
      print-attribute="name"
      @selected="onChange">
    </md-autocomplete>
  </md-input-container>
`;

export default { name, props, data, mounted, methods, template };
