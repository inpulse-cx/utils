import { IndexedKey } from "./types";
export * from "./hooks";
export * from "./objects";
export * from "./sorting";
import * as strings from "./strings";

export type { IndexedKey };

export { strings };

export default {
  ...strings,
};
