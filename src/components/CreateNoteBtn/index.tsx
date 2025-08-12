import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { MainStackParams } from "../../models/navigators/MainStackParams";

const CreateNoteBtn = () => {
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  const handleGoToCreateNote = () => {
    navigation.navigate("CreateNote");
  };

  return (
    <TouchableOpacity onPress={handleGoToCreateNote}>
      <Text>CreateNoteBtn</Text>
    </TouchableOpacity>
  );
};

export default CreateNoteBtn;

const styles = StyleSheet.create({});
