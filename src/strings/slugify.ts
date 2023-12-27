import removeAccents from "./remove-accents";
import removeInitialDash from "./remove-initial-dash";
import replaceDoubleDashes from "./replace-double-dashes";
import removeSpecialChars from "./remove-special-chars";
import replaceSpaces from "./replace-spaces";

type SlugifyOptions = {
  ignoreDashes?: boolean;
  ignoreDots?: boolean;
  useDashes?: boolean;
};

function slugify(string: string, options?: SlugifyOptions): string {
  if (!string || typeof string !== "string") return "";
  const { ignoreDashes, ignoreDots, useDashes } = options || {};
  return replaceDoubleDashes(
    removeInitialDash(
      replaceSpaces(
        removeSpecialChars(removeAccents(string), { ignoreDashes, ignoreDots }),
        { useDashes }
      )
    )
  ).toLowerCase();
}

export { slugify };
