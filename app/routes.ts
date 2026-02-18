import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("checkout", "./routes/checkout/index.tsx"),
] satisfies RouteConfig;
