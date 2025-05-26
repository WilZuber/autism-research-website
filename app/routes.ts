import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("articles", "routes/articles.tsx"), 
    route("resources", "routes/resources.tsx"), 
    route("about", "routes/about.tsx"), 
    route("contact", "routes/contact.tsx"),
    route("language-around-autism", "routes/language-around-autism.tsx")

] satisfies RouteConfig;
