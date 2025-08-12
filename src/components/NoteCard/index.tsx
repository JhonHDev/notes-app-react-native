import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { MainStackParams } from "../../models/navigators/MainStackParams";
import { Note } from "../../models/Note";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  const handleGoToUpdateNote = () => {
    navigation.navigate("UpdateNote", { note });
  };

  return (
    <TouchableOpacity onPress={handleGoToUpdateNote}>
      <View style={{ padding: 16, borderBottomWidth: 1, borderColor: "#ccc" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{note.title}</Text>
        <Text>{note.description}</Text>
        <Text style={{ color: note.isImportant ? "red" : "black" }}>
          {note.isImportant ? "Important" : "Normal"}
        </Text>
        <Text style={{ fontSize: 12, color: "#666" }}>
          Created at: {new Date(note.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;

const styles = StyleSheet.create({});
