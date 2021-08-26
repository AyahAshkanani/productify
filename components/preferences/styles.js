import styled from "styled-components/native";

export const ChangeThemeText = styled.Text`
  align-self: center;
  color: ${(props) => props.theme.mainTextColor};
  font-size: 25px;
  font-weight: 600;
  ${"" /* margin-left: 10px; */}
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const ThemeMessage = styled.Text`
  align-self: flex-start;
  color: ${(props) => props.theme.mainTextColor};
  font-size: 20px;
  font-weight: 200;
  margin-left: 25px;
  margin-top: 35px;
`;

export const ThemeTitle = styled.Text`
  align-self: center;
  color: ${(props) => props.theme.mainTextColor};
  font-size: 20px;
  font-weight: 300;
  margin-top: 35px;
`;

export const ThemeImage = styled.Image`
  align-self: center;
  margin-top: 50;
`;

export const PrefContainer = styled.View`
  flex: 1;
  border-color: ${(props) => props.theme.mainColor};
  border-top-width: 220;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const PrefContent = styled.View`
  flex: 1;
  margin-top: -140;
  background-color: transparent;
`;
export const GreetingUser = styled.Text`
  align-items: center;
  color: ${(props) => props.theme.mainColor};
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
  margin-bottom: 40px;
  margin-top: 40px;
  
`;
