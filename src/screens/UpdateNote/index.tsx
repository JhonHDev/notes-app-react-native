import React from "react";
import { StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { MainStackParams } from "../../models/navigators/MainStackParams";

import NotesLayout from "../../components/NotesLayout";
import NotesForm from "../../components/NotesForm";

interface Props extends StackScreenProps<MainStackParams, "UpdateNote"> {}

const UpdateNote = ({ route }: Props) => {
  const note = route.params?.note;

  return (
    <NotesLayout>
      <NotesForm note={note} />
    </NotesLayout>
  );
};

export default UpdateNote;

const styles = StyleSheet.create({});
