const routes = [
  { path: "/", component: () => import("./containers/home") },
  { path: "*", redirect: "/" }
];

export default routes;
