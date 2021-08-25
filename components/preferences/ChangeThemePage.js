import React, { useState } from "react";
import { Row, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

//styled components
import {
  ChangeThemeText,
  ThemeImage,
  ThemeMessage,
  ThemeTitle,
} from "./styles";

//components
import RadioGroup from "react-native-radio-buttons-group";
import { Button } from "native-base";

const ChangeThemePage = ({ changeTheme, currentTheme }) => {
  const navigation = useNavigation();
  const radioButtonsData = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "red",
      value: "red",
      selected: currentTheme === "red",
    },
    {
      id: "2",
      label: "blue",
      value: "blue",
      selected: currentTheme === "blue",
    },
    {
      id: "3",
      label: "purple",
      value: "purple",
      selected: currentTheme === "purple",
    },
    {
      id: "4",
      label: "green",
      value: "green",
      selected: currentTheme === "green",
    },
  ];

  const themeColors = {
    red: {
      image: <ThemeImage source={require("../../assets/redTheme.png")} />,
      message: (
        <ThemeMessage>
          For fast-paced atmospheres that require a lot of energy. Red is known
          as a passionate, emotional color. No wonder that it increases the
          heart rate and gets the blood pumping!
        </ThemeMessage>
      ),
    },
    blue: {
      image: <ThemeImage source={require("../../assets/blueTheme.png")} />,
      message: (
        <ThemeMessage>
          Blue has a calming effect which can help to improve your focus. This,
          of course, contributes to productivity (it’s hard to be productive if
          you are stressed out all the time.
        </ThemeMessage>
      ),
    },
    purple: {
      image: <ThemeImage source={require("../../assets/purpleTheme.png")} />,
      message: (
        <ThemeMessage>
          If you are looking to boost productivity to increase both creativity
          and serenity, a light purple can release tension while also allowing
          the creativity to flow.
        </ThemeMessage>
      ),
    },
    green: {
      image: <ThemeImage source={require("../../assets/greenTheme.png")} />,
      message: (
        <ThemeMessage>
          Green is pleasant – it is easy on the eyes and has a calming effect –
          and has been shown to increase efficiency. Green may be a good choice
          to help you stay focused and on task.
        </ThemeMessage>
      ),
    },
  };

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [selectedTheme, setSelectedTheme] = useState(currentTheme);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    let selectedColor = radioButtonsArray.find((color) => color.selected);
    setSelectedTheme(selectedColor.value);
  }

  const UpdateTheme = () => {
    let selectedColor = radioButtons.find((color) => color.selected);
    changeTheme(selectedColor.value);
    navigation.navigate("Home");
  };

  return (
    <View>
      <ChangeThemeText></ChangeThemeText>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
      {themeColors[selectedTheme].image}
      <ThemeTitle> Feeling {selectedTheme}?</ThemeTitle>
      {themeColors[selectedTheme].message}
      <Button style={{ marginTop: 40 }} onPress={() => UpdateTheme()}>
        save
      </Button>
    </View>
  );
};

export default ChangeThemePage;
