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
