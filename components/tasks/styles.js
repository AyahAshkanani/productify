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

export const TaskDetailWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;
export const NoTasksText = styled.Text`
  align-self: center;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 20px;
  font-weight: 200;
  margin: 50px;
`;

export const TodaysTasksText = styled.Text`
  align-self: flex-start;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 20px;
  font-weight: 400;
  margin: 10px;
`;
export const TaskDetailsStyle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.mainTextColor};
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const TaskTextStyled = styled.Text`
  color: #fcd5ce;
  font-size: 25px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const TaskItemStyle = styled.View`
  width: 70%;
  align-items: center;
  justify-content: center;
`;

export const TaskTitle = styled.Text`
  color: #9d8189;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  border-bottom-color: #9d8189;
`;

export const TaskContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;
export const TaskTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #9d8189;
  border-bottom-color: #9d8189;
  border-bottom-width: 3px;
`;

export const TaskButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const TaskButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f4acb7;
  margin-top: 30px;
`;
export const AddTaskTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin: 20px;
  margin-left: 10px;
  margin-top: 50px;
`;

export const AddTaskLabels = styled.Text`
  font-weight: 400;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 15px;
`;

export const AddTaskButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin: 60px;
  background-color: ${(props) => props.theme.mainColor};
  margin-top: 30px;
`;

export const AddTaskButtonText = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  font-size: 18px;
`;
