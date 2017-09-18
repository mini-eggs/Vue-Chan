import Image from "./image";

const name = "x-single";

const data = () => ({});

const components = {
  "x-image": Image
};

const props = ["item", "disableButtons", "view"];

const methods = {
  handleLinkClick(event) {
    const link = event.target.href;
    console.log(`user clicked on HTML a tag with link of ${link}`);
    event.stopPropagation();
    event.preventDefault();
  },
  getThreaLink(item) {
    const board = this.$route.params.board;
    return `/${board}/${item.thread}`;
  }
};

const template = `
  <div id="single">
    <v-card>
      <x-image :item="item"></x-image>
      <v-card-title primary-title>
        <p v-html="item.com"></p>
      </v-card-title>
    </v-card>
  </div>
`;

export default {
  name,
  props,
  components,
  data,
  methods,
  template
};
