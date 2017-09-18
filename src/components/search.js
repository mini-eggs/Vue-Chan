// @flow

const name = "x-search";

function mounted() {
  this.$bus.$on("search", this.focus);
}

function beforeDestroy() {
  this.$bus.$off("search", this.focus);
}

const methods = {
  focus() {
    this.$nextTick(() => {
      this.$el.querySelector("input").focus();
    });
  }
};

const template = `
  <div id="search">
    <v-text-field
      label="Search boards..."
      single-line
      @input="updateSearchInput" 
    ></v-text-field>
  </div>
`;

export default { name, mounted, beforeDestroy, methods, template };
