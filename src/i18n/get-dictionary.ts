import { en } from "@/content/en";
import { fr } from "@/content/fr";
import type { Content } from "@/content/types";

import type { Locale } from "./config";

const dictionaries: Record<Locale, Content> = { en, fr };

export function getDictionary(locale: Locale): Content {
  return dictionaries[locale];
}
