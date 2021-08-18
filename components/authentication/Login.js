import React, { useState } from "react";
import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "./styles";
// stores
import authStore from "../../stores/authStore";

import { observer } from "mobx-react";

const Login = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.login(user, navigation);
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
