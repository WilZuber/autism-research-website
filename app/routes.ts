import { type RouteConfig, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("articles", "routes/articles.tsx")] satisfies RouteConfig;
