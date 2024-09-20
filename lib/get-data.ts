import path from "node:path";
import { promises } from "node:fs";
import { kebabCase } from "lodash";

export interface ConstitutionType {
  title: string;
  content: ConstitutionContent[];
  locale: ConstitutionLocale;
}

export interface ConstitutionContent {
  label: string;
  content: string;
}

export interface ConstitutionLocale {
  en: ConstitutionEn;
}

export interface ConstitutionEn {
  title: string;
  content: ConstitutionContent[];
}

export async function getConstitution(): Promise<ConstitutionType[]> {
  return JSON.parse(
    await promises.readFile(
      path.join(process.cwd(), "data", `constitution.json`),
      "utf-8"
    )
  ) as ConstitutionType[];
}

export async function getConstitutionByType(
  type: string
): Promise<ConstitutionType | undefined> {
  const allData = await getConstitution();
  return allData.find(({ title }) => kebabCase(title) === type);
}
