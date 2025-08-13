import React from "react";
import { StyleSheet, FlatList, ScrollView, View } from "react-native";

import { noteCategories } from "../../utils/noteCategories";

import NoteCategoryBtn from "../NoteCategoryBtn";

const NoteCategories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {noteCategories.map((category) => (
        <NoteCategoryBtn key={category.id} category={category} />
      ))}
    </ScrollView>
  );
};

export default NoteCategories;

const styles = StyleSheet.create({
  container: {
    gap: 4,
    flexDirection: "row",
    paddingLeft: 20,
  },
});
