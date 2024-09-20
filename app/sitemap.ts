import type { MetadataRoute } from "next";
import { kebabCase } from "lodash";

import { hostName } from "@/lib/site-config";
import { getConstitution } from "@/lib/get-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const constitution = await getConstitution();
  return [
    {
      url: `${hostName}`,
      lastModified: new Date(),
    },
    ...constitution.map(({ title }) => ({
      url: `${hostName}/${kebabCase(title)}`,
      lastModified: new Date(),
    })),
  ];
}
