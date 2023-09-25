import * as hooks from "./hooks";
import objectToArray from "./objects/objectToArray";
import capitalize from "./strings/capitalize";
import sortByAlphabet from "./sorting/alphabet";
import sortByDate from "./sorting/date";
import slugify from "./strings/slugify";
import IndexedKey from "./types/IndexedKey";

export type types = {
  IndexedKey: IndexedKey;
};

const objects = {
  objectToArray,
};

const sorting = {
  sortByAlphabet,
  sortByDate,
};

const strings = {
  capitalize,
  slugify,
};

export default {
  hooks,
  objects,
  sorting,
  strings,
};
