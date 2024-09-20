import type { MetadataRoute } from "next";

import { hostName } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //   disallow: "/private/",
    },
    sitemap: `${hostName}/sitemap.xml`,
  };
}
