import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...site.navigation.map((item) => item.href)];

  return routes.map((route, index) => ({
    url: new URL(route, site.url).toString(),
    priority: index === 0 ? 1 : 0.7,
  }));
}
