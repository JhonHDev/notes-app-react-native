import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Note } from "../../models/Note";

interface Props {
  note?: Note;
}

const NotesForm = ({ note }: Props) => {
  return (
    <View>
      <Text>Form</Text>
    </View>
  );
};

export default NotesForm;

const styles = StyleSheet.create({});
