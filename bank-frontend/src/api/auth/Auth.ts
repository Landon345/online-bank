import { API_BASE_URL } from "src/api/baseUrl";

export async function SendLogin(credentials) {
  const Response = await fetch(`${API_BASE_URL}/login`, {
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
    body: JSON.stringify(credentials),
  });
  const data = await Response.json();
  console.log(data);
  return data;
}

export async function SendLogout() {
  console.log("api_key", localStorage.getItem("api_key"));
  const Response = await fetch(`${API_BASE_URL}/logout`, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${localStorage.getItem("api_key")}`,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
  });
  const data = await Response.json();
  console.log(data);
  return data;
}

export async function RegisterUser(loginInfo) {
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
  return logindata;
}
export async function RegisterPersonalInfo(personalInfo) {
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
  return personalInfodata;
}

export async function RegisterAccounts(accounts) {
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
  return accountsdata;
}
