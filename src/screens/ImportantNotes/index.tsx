import React from "react";
import { FlatList, StyleSheet } from "react-native";

import NotesLayout from "../../components/NotesLayout";
import NoteCard from "../../components/NoteCard";

const ImportantNotes = () => {
  const dummyNoteList = [
    {
      id: "1",
      title: "Dummy Note 1",
      description: "This is a dummy note for testing purposes.",
      isImportant: true,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
    {
      id: "2",
      title: "Dummy Note 2",
      description: "This is a dummy note for testing purposes.",
      isImportant: true,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
  ];

  return (
    <NotesLayout showCreateBtn>
      <FlatList
        data={dummyNoteList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteCard note={item} />}
      />
    </NotesLayout>
  );
};

export default ImportantNotes;

const styles = StyleSheet.create({});
