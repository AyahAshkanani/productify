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

// export const TripDetailLocation = styled.Text`
//   font-size: 20px;
// `;

// export const TripListItem = styled.View`
//   flex-direction: row;
//   ${"" /* justify-content: center; */}
//   align-items: center;
//   flex-wrap: wrap;
//   margin-bottom: -9px;
// `;

// export const AddTripTitle = styled.Text`
//   font-weight: bold;
//   font-size: 30px;
//   margin: 20px;
//   margin-left: 10px;
//   margin-top: 90px;
// `;

// export const AddTripLabels = styled.Text`
//   font-weight: 500;
//   font-size: 15px;
//   margin-top: 20px;
//   margin-left: 15px;
// `;

// export const AddTripButton = styled.TouchableOpacity`
//   align-self: stretch;
//   align-items: center;
//   padding: 20px;
//   margin: 60px;
//   background-color: ${(props) => props.theme.mainColor};
//   margin-top: 30px;
// `;

// export const AddTripButtonText = styled.Text`
//   color: ${(props) => props.theme.backgroundColor};
//   font-weight: bold;
//   font-size: 18px;
// `;
// export const WishButtonStyling = styled.Text`
//   color: ${(props) => props.theme.pink};
//   font-size: 22px;
// `;
