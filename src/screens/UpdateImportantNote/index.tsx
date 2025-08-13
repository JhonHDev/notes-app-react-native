import React from "react";
import { StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { ImportantNotesStackParams } from "../../models/navigators/ImportantNotesStackParams";

import NotesLayout from "../../components/NotesLayout";
import NotesForm from "../../components/NotesForm";

interface Props
  extends StackScreenProps<ImportantNotesStackParams, "UpdateImportantNote"> {}

const UpdateImportantNote = ({ route }: Props) => {
  const note = route.params?.note;

  return (
    <NotesLayout>
      <NotesForm note={note} />
    </NotesLayout>
  );
};

export default UpdateImportantNote;

const styles = StyleSheet.create({});
