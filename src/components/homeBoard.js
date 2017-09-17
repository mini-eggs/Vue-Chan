// @flow

import "./homeBoard.css";

const name = "x-home-board";

const props = ["board"];

const template = `
  <md-card>
    <md-card-header>
      <div class="md-title">/{{ board.board }}/</div>
      <div class="md-subhead">{{ board.title }}</div>
    </md-card-header>

    <md-card-content>
      <div v-html=" board.meta_description " ></div>
    </md-card-content>

    <router-link :to=" '/' + board.board " tag="span">
      <md-card-actions>
        <md-button>View</md-button>
      </md-card-actions>
    </router-link>
  </md-card>
`;

export default { name, props, template };
