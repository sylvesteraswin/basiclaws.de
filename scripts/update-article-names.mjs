import constitution from "../data/constitution.json" with { type: "json" };
import titles from "../data/article-names.json" with { type: "json" };
import path from "path";
import { promises } from "node:fs";
import { format } from "prettier";

async function main() {
  const articleMap = new Map(
    titles.map((title) => {
      const match = title.match(/^(?:Article|Art)\s(\d+[a-z]?)(?:\[(.+)\])?/);
      return [`Art ${match[1]}`, match[2]];
    })
  );
  const newConstitution = constitution.map((article) => {
    return {
      ...article,
      locale: {
        en: {
          ...article.locale.en,
          content: article.locale.en.content.map((v) => ({
            ...v,
            label: `${v.label} ${articleMap.get(v.label.trim()) ?? ""}`,
          })),
        },
      },
    };
  });

  await promises.writeFile(
    path.join(process.cwd(), "data", "constitution.json"),
    await format(JSON.stringify(newConstitution), { parser: "json" })
  );
}

/** Call the main function if its called from node cli. */
if (import.meta.url === import.meta.url) {
  main();
}
