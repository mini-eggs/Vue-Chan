// @flow

const routes = [
  { path: "/", component: () => import("./containers/home") },
  { path: "/:board", component: () => import("./containers/threads") },
  { path: "/:board/:thread", component: () => import("./containers/posts") },
  { path: "*", redirect: "/" }
];

export default routes;
