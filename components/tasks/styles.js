import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  border-color: ${(props) => props.theme.mainColor};
  border-top-width: 220;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const HomeContent = styled.View`
  flex: 1;
  margin-top: -140;
  background-color: transparent;
`;

export const CalendarContainer = styled.View`
  border-radius: 10px;
  border-width: 1px;
  border-color: transparent;
`;

export const ListWrapper = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
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
  margin-right: 7%;
  margin-left: 7%;
  border-radius: 10px;
  border-width: 1px;
  border-color: transparent;
  background-color: white;
`;

export const TaskDetailWrapper = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-right: 2%;
  margin-left: 2%;
  border-width: 2px;
  border-color: grey;
  border-radius: 35px;
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
  color: ${(props) => props.theme.mainTextColor};
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
`;

export const TaskDetailsStyle = styled.Text`
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
  align-items: center;
  align-self: center;
  justify-content: center;
  color: ${(props) => props.theme.mainTextColor};
  padding: 10px;
  margin-bottom: 10px;
`;

export const DueDate = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: ${(props) => props.theme.mainTextColor};
  align-items: center;
  justify-content: center;
  padding: 3px;
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

export const TaskTag = styled.Text`
  align-self: flex-start;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
  margin-top: 10px;
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
  color: ${(props) => props.theme.mainColor};
  font-weight: bold;
  font-size: 35px;
  margin: 20px;
  margin-left: 10px;
  margin-top: 50px;
  text-align: center;
`;
export const UpdateTaskTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin: 20px;
  margin-left: 10px;
`;
export const DeleteTaskTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  /* margin: 20px; */
  margin-left: 10px;
`;
export const AddTaskLabels = styled.Text`
  font-weight: 400;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 15px;
`;

export const AddTaskButton = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 75%;
  padding: 15px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: ${(props) => props.theme.mainColor};
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 40px;
`;

export const AddTaskButtonText = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  font-size: 18px;
`;
export const AddContainer = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const AddTitle = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${({ theme }) => theme.yellow};
`;

export const AddTextInput = styled.TextInput`
  margin-top: 20px;
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.white};
`;

export const GreetingMessage = styled.Text`
  align-self: flex-start;
  color: ${(props) => props.theme.secondaryTextColor};
  font-size: 25px;
  font-weight: 400;
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const GreetingUserName = styled.Text`
  align-self: flex-start;
  color: ${(props) => props.theme.secondaryTextColor};
  font-size: 25px;
  font-weight: 600;
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ProgressMessage = styled.Text`
  align-self: flex-start;
  color: ${(props) => props.theme.secondaryTextColor};
  font-size: 20px;
  font-weight: 300;
  margin-left: 25px;
  margin-bottom: -2px;
`;
