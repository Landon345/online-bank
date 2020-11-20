import React from "react";
import { Route, Redirect } from "react-router-dom";

function LoggedInRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (sessionStorage.getItem("api_key")) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}

export default LoggedInRoute;
