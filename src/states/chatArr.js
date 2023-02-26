import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const chatArrAtom = atom({
  key: `chatArr_${uuidv4()}`,
  default: [],
});
