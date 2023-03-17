import removeAccents from './remove-accents';
import removeInitialDash from './remove-initial-dash';
import replaceDoubleDashes from './replace-double-dashes';
import removeSpecialChars from './remove-special-chars';
import replaceSpaces from './replace-spaces';

const slugify = (str, useDashes, ignoreDashes) => {
  if (!str || typeof str !== 'string') return '';
  return replaceDoubleDashes(
    removeInitialDash(
      replaceSpaces(
        removeSpecialChars(
          removeAccents(
            str, true,
          ),
          ignoreDashes !== undefined ? ignoreDashes : false,
        ),
        useDashes !== undefined ? useDashes : true,
      ),
    ),
  ).toLowerCase();
};

export default slugify;
