import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/daisy", "/daisy/support", "/daisy/privacy"].map((path) => ({
    url: new URL(path, "https://howtobuild.app").href,
  }));
}
