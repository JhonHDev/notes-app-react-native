import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { MainStackParams } from "../../models/navigators/MainStackParams";

const CreateNoteBtn = () => {
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  const handleGoToCreateNote = () => {
    navigation.navigate("CreateNote");
  };

  return (
    <TouchableOpacity onPress={handleGoToCreateNote} style={styles.container}>
      <FontAwesome name="plus" size={24} color="#FFF" />
    </TouchableOpacity>
  );
};

export default CreateNoteBtn;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: "#000",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 10,
    zIndex: 1000,
  },
});
