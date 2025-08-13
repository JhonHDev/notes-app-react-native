import React from "react";
import { StyleSheet, View } from "react-native";

import NoteCategories from "../NoteCategories";
import CreateNoteBtn from "../CreateNoteBtn";

interface Props {
  children: React.ReactNode;
  showCategories?: boolean;
  showCreateBtn?: boolean;
}

const NotesLayout = ({ children, showCategories, showCreateBtn }: Props) => {
  return (
    <View style={styles.container}>
      {showCategories && (
        <View>
          <NoteCategories />
        </View>
      )}
      <View>{children}</View>
      {showCreateBtn && <CreateNoteBtn />}
    </View>
  );
};

export default NotesLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    gap: 20,
    paddingTop: 20,
    position: "relative", // Para que el botón absoluto se posicione respecto a este contenedor
  },
});
