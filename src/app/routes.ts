import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  // Rota principal (home)
  index("../routes/home.tsx"),
  
  // Rota para a página 2
  route("page2", "../routes/page2.tsx"),
] satisfies RouteConfig;
