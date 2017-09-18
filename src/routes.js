// @flow

import Home from "./containers/home";
import Settings from "./containers/settings";
import Threads from "./containers/threads";
import Posts from "./containers/posts";

const routes = [
  { path: "/", component: Home },
  { path: "/settings", component: Settings },
  { path: "/:board", component: Threads },
  { path: "/:board/:thread", component: Posts },
  { path: "*", redirect: "/" }
];

export default routes;
