import styled from "styled-components/native";

export const ListWrapper = styled.View`
  margin-left: -8.5px;
`;

export const TaskItemName = styled.Text`
  align-self: flex-start;
  font-size: 20px;
  font-weight: 400;
  margin: 10px;
`;

export const TaskItemDateAndTime = styled.Text`
  align-self: flex-start;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 15px;
  font-weight: 300;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const TaskItemWrapper = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  margin-right: 10%;
  margin-left: 10%;
  border-radius: 10px;
  border-width: 1px;
  border-color: transparent;
  background-color: white;
`;
