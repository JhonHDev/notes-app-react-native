import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { NoteCategory } from "../../models/NoteCategory";
import { getCategoryIcon } from "../../utils/getCategoryIcon";

interface Props {
  category: NoteCategory;
}

const NoteCategoryBtn = ({ category }: Props) => {
  const handleFilterNotesByCategory = () => {
    console.log({ category });
  };

  return (
    <TouchableOpacity onPress={handleFilterNotesByCategory}>
      <View style={styles.container}>
        <Text style={styles.text}>{category.name}</Text>
        {getCategoryIcon(category.type)}
      </View>
    </TouchableOpacity>
  );
};

export default NoteCategoryBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    borderRadius: 100,
    paddingHorizontal: 20,
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 13,
  },
});
