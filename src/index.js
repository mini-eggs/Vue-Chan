import Vue from "vue/dist/vue.esm";
import registerServiceWorker from "./registerServiceWorker";
import { app, router } from "./app";
import Store from "./store";

import "vuetify/dist/vuetify.css";
import "./styles/main.css";
import "./styles/components/header.css";
import "./styles/components/search.css";
import "./styles/components/homeBoard.css";
import "./styles/components/image.css";
import "./styles/components/loader.css";
import "./styles/components/scroll.css";
import "./styles/components/single.css";
import "./styles/components/threadSet.css";
import "./styles/scenes/home.css";
import "./styles/scenes/posts.css";
import "./styles/scenes/settings.css";
import "./styles/scenes/threads.css";

function rgba({ r, g, b, a }) {
  const arr = [r, g, b, a];
  return `rgba(${arr.join(", ")})`;
}

Store.subscribe(() => {
  const theme = Store.getState().Settings.theme;

  const hbc = rgba(theme.hbc);
  const htc = rgba(theme.htc);
  const bbc = rgba(theme.bbc);
  const btc = rgba(theme.btc);

  console.log(bbc);

  const styles = [
    `html, .card, .application, .list {  
      background-color: ${bbc} !important;
    }`,
    `* {
      color: ${btc} !important;
    }`,
    `.primary, .input-group__details:after {
      background-color: ${hbc} !important;
    }`,
    `header, header *, button.primary, button.primary * {
      color: ${htc} !important;
    }`
  ];

  const style = document.createElement("style");
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  styles.forEach(singleStyle => {
    style.sheet.insertRule(singleStyle);
  });
});

new Vue({ el: "#root", router, render: h => h(app) });
registerServiceWorker();
