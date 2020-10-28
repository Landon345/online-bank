import { API_BASE_URL } from "src/api/baseUrl";

export async function Register(loginInfo, accounts, personalInfo) {
  try {
    const loginResponse = await fetch(`${API_BASE_URL}/register/logininfo`, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "omit", // include, *same-origin, omit
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(loginInfo),
    });
    const logindata = await loginResponse.json();
    console.log(logindata);

    const accountsResponse = await fetch(`${API_BASE_URL}/register/accounts`, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "omit", // include, *same-origin, omit
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(accounts),
    });
    const accountsdata = await accountsResponse.json();
    console.log(accountsdata);

    const personalInfoResponse = await fetch(
      `${API_BASE_URL}/register/personalinfo`,
      {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(personalInfo),
      }
    );
    const personalInfodata = await personalInfoResponse.json();
    console.log(personalInfodata);
    return {
      logindata: logindata,
      accountsdata: accountsdata,
      personalinfodata: personalInfodata,
    };
  } catch (e) {
    return `There was an error: ${e}`;
  }
}
