import React, { useState } from "react";

import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "./styles";

 //stores
import authStore from "../../stores/authStore";

//observer
import { observer } from "mobx-react";

const Login = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.login(user);
    // what if the login failed? and there is no user in authStore.user?
    if (authStore.user) navigation.replace("TaskList");
  };
  return (
    <AuthContainer>
      <AuthTitle>Log in</AuthTitle>
      <AuthTextInput
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Log in</AuthButtonText>
      </AuthButton>

      <AuthOther onPress={() => navigation.navigate("Register")}>
        Click here to Register
      </AuthOther>
    </AuthContainer>
  );
};
export default observer(Login);
