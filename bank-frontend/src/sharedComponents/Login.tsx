import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { ContinueButton, TextInput, TextLabel } from "src/open-account/style";
import { SendLogin } from "src/api/auth/Auth";
import { useRecoilState } from "recoil";
import { sideLoginOpen } from "src/recoil/atoms";

type LoginProps = {};
type TParams = {};

const Login: React.FC<LoginProps> = ({
  history,
}: RouteComponentProps<TParams>) => {
  // eslint-disable-next-line
  const [loginOpen, setLoginOpen] = useRecoilState(sideLoginOpen);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await SendLogin({ username, password });
    if (response.success) {
      sessionStorage.removeItem("api_key");
      sessionStorage.setItem("api_key", response.data.api_key);
      history.push("/dashboard");
      setLoginOpen(false);
    } else {
      setMessage("Username or password was incorrect");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <Box d="grid" gridTemplateColumns="1fr 1fr">
        <TextLabel htmlFor="username">Username</TextLabel>
        <TextInput
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextLabel htmlFor="password">Password</TextLabel>
        <TextInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Box p="10px">
        Forgot <Link>username</Link> or <Link>password</Link>?
      </Box>
      <ContinueButton onClick={login}>Log In</ContinueButton>
      {message && <p>{message}</p>}
    </>
  );
};

export default withRouter(Login);
