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

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.register(user, navigation);
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign Up</AuthTitle>
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
        <AuthButtonText>Register</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Login")}>
        Click here to Log in
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Register);
