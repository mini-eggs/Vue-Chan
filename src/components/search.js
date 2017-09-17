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
  <div class="search-container">
    <md-input-container md-inline md-clearable>
      <label>Search Boards...</label>
      <md-input @change="updateSearchInput" ></md-input>
    </md-input-container>
  </div>
`;

export default { name, mounted, beforeDestroy, methods, template };
