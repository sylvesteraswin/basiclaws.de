import { type Metadata } from "next";
import { kebabCase } from "lodash";

import { redirect } from "next/navigation";
import { Languages } from "lucide-react";
import { getConstitutionByType } from "@/lib/get-data";
import { siteName, ogURL, hostName } from "@/lib/site-config";

interface Props {
  params: { type: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sectionData = await getConstitutionByType(params.type);

  if (typeof sectionData === "undefined") {
    redirect("/");
  }

  const pageURL = `${hostName}/${kebabCase(sectionData.title)}`;

  return {
    title: sectionData.title,
    description: sectionData.title,
    openGraph: {
      siteName,
      locale: "en_US",
      type: "website",
      images: [`${ogURL}${pageURL}`],
    },
    other: {
      canonical: pageURL,
    },
  };
}

export default async function TypePage({ params }: Props) {
  const sectionData = await getConstitutionByType(params.type);

  if (typeof sectionData === "undefined") {
    redirect("/");
  }

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-4xl font-black font-heading">
          {sectionData.title}
        </h1>
        {sectionData?.locale?.en && (
          <div
            className="text-muted-foreground flex gap-2 font-sans font-normal text-lg"
            aria-disabled="true"
          >
            <Languages size={20} className="flex-shrink-0 mt-1" />
            {sectionData.locale.en.title}
          </div>
        )}
      </div>
      <article className="space-y-10 divide-y-2 mt-10">
        {sectionData.content.map((lawSection, index) => {
          const lawSectionEn = sectionData.locale?.en?.content?.at(index);
          return (
            <article
              className="space-y-4 pt-10"
              key={`${lawSection.label}-${index}`}
            >
              <div>
                <h2 className="text-3xl font-bold flex flex-col lg:flex-row gap-4 items-start">
                  {lawSection.label}
                </h2>
                {lawSectionEn && (
                  <div
                    className="text-muted-foreground flex gap-2 font-sans font-normal text-lg"
                    aria-disabled="true"
                  >
                    <Languages size={20} className="flex-shrink-0 mt-1" />
                    {lawSectionEn.label}
                  </div>
                )}
              </div>
              <div className="text-lg">
                <div>{lawSection.content}</div>
                {lawSectionEn && lawSectionEn?.content.length > 0 && (
                  <div
                    className="text-muted-foreground flex gap-2 font-sans font-normal text-lg mt-6"
                    aria-disabled="true"
                  >
                    <Languages size={20} className="flex-shrink-0 mt-1" />
                    {lawSectionEn.content}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </article>
    </>
  );
}
