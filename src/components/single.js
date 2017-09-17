// import RemoveClickEvents from "../objects/removeClickEvents";
import Image from "./image";
import "./single.css";

const name = "x-single";

const data = () => ({});
// const data = () => ({ removeClickEventsInstance: undefined });

const components = {
  "x-image": Image
};

const props = ["item", "disableButtons", "view"];

function mounted() {
  // const el = this.$el.querySelector(".html-container");
  // const onClick = this.handleLinkClick;
  // this.removeClickEventsInstance = new RemoveClickEvents(el, onClick);
  // this.$nextTick(() => this.removeClickEventsInstance.listen());
}

function beforeDestroy() {
  // this.removeClickEventsInstance.unlisten();
}

const computed = {
  replyLink() {
    const { board, thread } = this.item;
    return `http://boards.4chan.org/${board}/thread/${thread}`;
  }
};

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
    <md-card>

      <!--IMAGE-->
      <x-image :item="item"></x-image>
      
      <!--NAME & TIME-->
      <!--
      <md-card-header>
        <div class="md-title">{{ item.name }}</div>
        <div class="md-subhead">{{ item.time }}</div>
      </md-card-header>
      -->
      
      <!-- CONTENT -->
      <md-card-content>
        <div class="html-container" v-html="item.com"></div>
      </md-card-content>
      
      <!--BUTTONS-->
      <md-card-actions v-if="!disableButtons" >

        <!--CHAT-->
        <a class="md-button no-link md-no-button" @click.stop :href="replyLink" target="_blank">
          <md-icon>chat</md-icon>
        </a>

        <!--VIEW-->
        <router-link class="default-margin-left pointer" v-if="view" tag="span" :to="getThreaLink(item)">
          <md-icon>arrow_forward</md-icon>
        </router-link>

      </md-card-actions>
    </md-card>
  </div>
`;

export default {
  name,
  props,
  components,
  data,
  computed,
  mounted,
  beforeDestroy,
  methods,
  template
};
