import React from "react";
import { StyleSheet } from "react-native";

import NotesLayout from "../../components/NotesLayout";
import NotesForm from "../../components/NotesForm";

const CreateNote = () => {
  return (
    <NotesLayout>
      <NotesForm />
    </NotesLayout>
  );
};

export default CreateNote;

const styles = StyleSheet.create({});
