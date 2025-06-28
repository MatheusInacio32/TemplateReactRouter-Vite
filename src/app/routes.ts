import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  // Rota principal (home)
  index("../routes/home.tsx"),
  
  // Rota para a página 2
  route("cart", "../routes/cart.tsx"),
] satisfies RouteConfig;
