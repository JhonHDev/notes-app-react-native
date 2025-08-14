import React from "react";
import { FlatList, StyleSheet } from "react-native";

import NotesLayout from "../../components/NotesLayout";
import NoteCard from "../../components/NoteCard";
import DeletedNotesAlert from "../../components/DeletedNotesAlert";
import { TypeOfNoteCategories } from "../../models/NoteCategories";
import { NoteImportant } from "../../models/NoteImportant";
import { NoteActive } from "../../models/NoteActive";

const DeletedNotes = () => {
  const dummyNoteList = [
    {
      id: 1,
      title: "Dummy Note 1",
      description: "This is a dummy note for testing purposes.",
      isImportant: NoteImportant.FALSE,
      category: TypeOfNoteCategories.finances,
      isActive: NoteActive.FALSE,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
    {
      id: 2,
      title: "Dummy Note 2",
      description: "This is a dummy note for testing purposes.",
      isImportant: NoteImportant.TRUE,
      category: TypeOfNoteCategories.personal,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
      isActive: NoteActive.FALSE,
    },
  ];

  return (
    <NotesLayout showCreateBtn>
      <DeletedNotesAlert />

      <FlatList
        data={dummyNoteList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteCard note={item} />}
      />
    </NotesLayout>
  );
};

export default DeletedNotes;

const styles = StyleSheet.create({});
