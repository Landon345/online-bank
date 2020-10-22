type faq = {
  question: string;
  answer: Array<string>;
};
const WhatAreBuckets: faq = {
  question: "What are buckets?",
  answer: [
    "Buckets help you organize the savings in your account into different categories.",
  ],
};

const AmIEarningInterestOnMoneyInMyBuckets: faq = {
  question: "Am I earning interest on money in my buckets?",
  answer: [
    "Yes, you’re earning interest on all the money in your account. We’ll add all your interest paid to your core savings unless you choose a different bucket.",
    "To change the bucket that gets your interest paid, log in to your Online Savings Account and go to Organize. Then select Settings and choose Interest Paid. From there, you can select any bucket you want.",
  ],
};

const WhatIsABooster: faq = {
  question: "What is a booster?",
  answer: [
    "A booster is an automated money-saving tool, available in your Online Savings Account, that you can set up to help you reach your goals even faster. At the moment, we offer these two types of boosters:",
    "Recurring transfers: Recurring transfers are a great way to reach your savings goals without having to constantly police yourself to set money aside. Want to learn more about our recurring transfers booster? ",
    "Surprise Savings: This booster finds money in your linked checking account that could be earning more value in your savings. You can link your checking accounts at Orion Bank or at another institution to use for Surprise Savings.",
    "Once you turn on Surprise Savings, our advanced analytics will compare what you normally spend in your linked checking account and identify any extra money to transfer to your Online Savings Account.",
    "To make sure your Surprise Savings transfers don’t cause you to overdraft or get too close to $0, we’ll only move money on Mondays, Wednesdays and Fridays, but not on bank holidays, and never move more than $100 at a time. We’ll send you an alert after each Surprise Savings transfer has occurred. You can stop Surprise Savings whenever you want.",
    "To add boosters to your account, go to Optimize.",
    "Want to learn more about our Surprise Savings booster?",
  ],
};

const HowDoIOpenAJointAccount: faq = {
  question: "How do I open a Joint Account?",
  answer: [
    "Later in your application, you can add up to a total of four joint account owners. For IRAs, there's only one account owner, so we won't prompt you for joint owner information if you're opening an IRA.",
  ],
};

const HowDoIOpenATrustOrCustodialAccount: faq = {
  question: "How do I open a Trust or custodial account?",
  answer: [
    "After you select the types of accounts you want to open, we'll prompt you with an option to open them in the name of a Trust or as custodial accounts.",
  ],
};

const CanIApplyByPhone: faq = {
  question: "Can I apply by phone?",
  answer: ["Yes. We're open 24/7, so call us at 1-877-247-2559."],
};
const IsAllyBankFDICInsured: faq = {
  question: "Is Orion Bank FDIC-insured?",
  answer: [
    "Orion Bank is a member of the FDIC. Learn more about FDIC coverage",
  ],
};

export {
  WhatAreBuckets,
  AmIEarningInterestOnMoneyInMyBuckets,
  WhatIsABooster,
  HowDoIOpenAJointAccount,
  HowDoIOpenATrustOrCustodialAccount,
  CanIApplyByPhone,
  IsAllyBankFDICInsured,
};
