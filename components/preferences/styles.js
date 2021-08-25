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
