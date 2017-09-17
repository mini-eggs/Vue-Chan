// @flow

const routes = [
  { path: "/", component: () => import("./containers/home") },
  { path: "/settings", component: () => import("./containers/settings") },
  { path: "/:board", component: () => import("./containers/threads") },
  { path: "/:board/:thread", component: () => import("./containers/posts") },
  { path: "*", redirect: "/" }
];

export default routes;
