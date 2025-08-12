import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "../Header";
import NoteCategories from "../NoteCategories";
import CreateNoteBtn from "../CreateNoteBtn";

interface Props {
  children: React.ReactNode;
  showCategories?: boolean;
  showCreateBtn?: boolean;
}

const NotesLayout = ({ children, showCategories, showCreateBtn }: Props) => {
  return (
    <View>
      <Header />
      {showCategories && <NoteCategories />}
      <View>{children}</View>

      {showCreateBtn && <CreateNoteBtn />}
    </View>
  );
};

export default NotesLayout;

const styles = StyleSheet.create({});
