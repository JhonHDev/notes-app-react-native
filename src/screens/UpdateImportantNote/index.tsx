import React from "react";
import { StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { ImportantNotesStackParams } from "../../models/navigators/ImportantNotesStackParams";

import NotesLayout from "../../components/NotesLayout";
import NotesForm from "../../components/NotesForm";

interface Props
  extends StackScreenProps<ImportantNotesStackParams, "UpdateImportantNote"> {}

const UpdateImportantNote = ({ route }: Props) => {
  const dummyNote = {
    id: "1",
    title: "Dummy Note",
    description: "This is a dummy note for testing purposes.",
    isImportant: false,
    createdAt: "2023-10-01T12:00:00Z",
    updatedAt: "2023-10-01T12:00:00Z",
  };

  return (
    <NotesLayout>
      <NotesForm note={dummyNote} />
    </NotesLayout>
  );
};

export default UpdateImportantNote;

const styles = StyleSheet.create({});
