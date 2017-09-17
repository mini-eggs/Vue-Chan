import "./threadSet.css";
import Single from "./single";

const name = "x-thread-set";

const components = {
  "x-single": Single
};

const props = ["items", "view"];

const template = `
  <div id="thread-set">
    <div v-for="(item, index) in items" :key="index">
      <x-single :view="view" :item="item"></x-single>
    </div>
  </div>
`;

export default { name, components, props, template };
