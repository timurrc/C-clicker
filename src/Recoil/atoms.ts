import { atom } from "recoil";

export const countState = atom<number>({
  key: "countState",
  default: 300,
});

export const boostState = atom<number>({
  key: "boostState",
  default: 0,
});
