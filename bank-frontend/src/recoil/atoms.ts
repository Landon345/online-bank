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
const createdAccountsState = atom({
  key: "createdAccountsState",
  default: [] as account[],
});

type personalInformation = {
  firstname: string;

  lastname: string;
  middleInitial: string;
  suffix: string;
  birthDate: string;
  socialSecurity: string;
  maidenName: string;
  occupation: string;

  email: string;
  personalPhone: string;
  workPhone: string;
  ext: string;

  address: string;
  addressLineTwo: string;
  city: string;
  state: string;
  zip: string;

  mailingAddress: string;
  previousAddress: string;
};

const personalInformationState = atom({
  key: "personalInformationState",
  default: {} as personalInformation,
});

const sideLoginOpen = atom({
  key: "sideLoginOpen",
  default: false,
});

export {
  textState,
  createdAccountsState,
  personalInformationState,
  sideLoginOpen,
};
