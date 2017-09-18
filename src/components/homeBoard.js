// @flow

const name = "x-home-board";

const props = ["board"];

const template = `
  <router-link class="pointer" :to=" '/' + board.board " tag="v-list-tile">

    <v-list-tile-content>
      <v-list-tile-title>
        /{{ board.board }}/ - {{ board.title }}
      </v-list-tile-title>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-icon>arrow_forward</v-icon>
    </v-list-tile-action>

  </router-link>
`;

export default { name, props, template };
