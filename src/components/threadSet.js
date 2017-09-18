import Single from "./single";
import Image from "./image";

const name = "x-thread-set";

const components = {
  "x-single": Single,
  "x-image": Image
};

function data() {
  const items = this.items;
  const item = items.shift();
  return {
    show: this.showChildren || false,
    item: item,
    children: items || []
  };
}

const props = ["items", "showChildren"];

const template = `
  <div id="thread-set">
    <v-card>
      <x-image :item="item"></x-image>
      <v-card-title primary-title>
        <p v-html="item.com"></p>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <a class="no-link" :href="item.reply" target="_blank">
          <v-btn icon>
            <v-icon>chat</v-icon>
          </v-btn>
        </a>
        <v-btn v-if="children.length > 0 && !showChildren" icon @click="show = !show">
          <v-icon>{{ show ? 'arrow_downward' : 'arrow_upward' }}</v-icon>
        </v-btn>
        <router-link :to=" '/' + item.board + '/' + item.thread " tag="span">
          <v-btn icon>
            <v-icon>arrow_forward</v-icon>
          </v-btn>
        </router-link>
      </v-card-actions>
      <blockquote v-if="show">
        <x-single
          v-for="(current, index) in children"
          :key="index"
          :item="current"
        ></x-single>
      </blockquote>
    </v-card>
  </div>
`;

export default { name, components, data, props, template };
