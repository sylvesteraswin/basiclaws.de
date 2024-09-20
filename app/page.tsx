import { kebabCase } from "lodash";
import Link from "next/link";
import { Languages } from "lucide-react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getConstitution } from "@/lib/get-data";
// import { hostName, siteName, ogURL } from "@/lib/site-config";

export default async function Home() {
  const [constitution] = await Promise.all([getConstitution()]);

  return (
    <>
      <h1 className="text-4xl font-black font-heading">
        Germany Basic Law (Grundgesetz)
      </h1>
      <p className="leading-7 text-lg mt-2">
        Establishing the legal and political framework for the federal
        government and its relationship with the states and citizens.
      </p>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {constitution.map(({ title, locale }, index) => (
          <Link
            key={`${title}-${index}`}
            href={`/${kebabCase(title)}`}
            className="col-span-1 flex w-full"
          >
            <Card key={`${title}-${index}`} className="w-full">
              <CardHeader className="p-4">
                <CardTitle className="leading-snug text-xl font-normal *:text-balance">
                  {title}
                </CardTitle>
                {locale?.en?.title && (
                  <div
                    className="text-muted-foreground flex gap-2 font-sans font-normal text-base"
                    aria-disabled="true"
                  >
                    <Languages size={16} className="flex-shrink-0 mt-1" />
                    {locale.en.title}
                  </div>
                )}
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
