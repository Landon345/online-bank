import { atom } from "recoil";

const textState = atom({
  key: "textState",
  default: 14,
});
type account = {
  accountId: number;
  accountType: string;
  accountCategory: string;
  cdTerm: string;
  amount: number;
  debit: boolean;
  checks: boolean;
  transfers: boolean;
};
type accountAtom = {
  key: string;
  default: account[];
};
const createdAccountsState = atom({
  key: "createdAccountsState",
  default: [] as account[],
});

export { textState, createdAccountsState };
