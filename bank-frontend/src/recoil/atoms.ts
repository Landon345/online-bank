import { atom } from "recoil";

const textState = atom({
  key: "textState",
  default: 14,
});

export { textState };
