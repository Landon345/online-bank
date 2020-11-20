import { API_BASE_URL } from "src/api/baseUrl";

export async function GetUserAccounts() {
  const Response = await fetch(`${API_BASE_URL}/accounts`, {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${sessionStorage.getItem("api_key")}`,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
  });
  const data = await Response.json();
  console.log(data);
  return data;
}
export async function GetAccountTransactions(accountid: Number) {
  const Response = await fetch(`${API_BASE_URL}/transactions/${accountid}`, {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${sessionStorage.getItem("api_key")}`,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
  });
  const data = await Response.json();
  console.log(data);
  return data;
}
export async function GetUser() {
  const Response = await fetch(`${API_BASE_URL}/user`, {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${sessionStorage.getItem("api_key")}`,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
  });
  const data = await Response.json();
  console.log(data);
  return data;
}
