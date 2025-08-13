import React from "react";
import { FlatList, StyleSheet } from "react-native";

import NotesLayout from "../../components/NotesLayout";
import NoteCard from "../../components/NoteCard";

const NoteLists = () => {
  const dummyNoteList = [
    {
      id: "1",
      title: "Dummy Note 1",
      description:
        "This is a dummy note for testing purposes. This is a dummy note for testing purposes This is a dummy note for testing purposes",
      isImportant: false,
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
    {
      id: "3",
      title: "Dummy Note 3",
      description: "This is a dummy note for testing purposes.",
      isImportant: false,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
    {
      id: "4",
      title: "Dummy Note 4",
      description: "This is a dummy note for testing purposes.",
      isImportant: false,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
    {
      id: "5",
      title: "Dummy Note 5",
      description: "This is a dummy note for testing purposes.",
      isImportant: false,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
    {
      id: "6",
      title: "Dummy Note 6",
      description: "This is a dummy note for testing purposes.",
      isImportant: false,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
    {
      id: "7",
      title: "Dummy Note 7",
      description: "This is a dummy note for testing purposes.",
      isImportant: false,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
    {
      id: "8",
      title: "Dummy Note 8",
      description: "This is a dummy note for testing purposes.",
      isImportant: false,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
    {
      id: "9",
      title: "Dummy Note 9",
      description: "This is a dummy note for testing purposes.",
      isImportant: false,
      createdAt: "2023-10-01T12:00:00Z",
      updatedAt: "2023-10-01T12:00:00Z",
    },
  ];

  return (
    <NotesLayout showCategories showCreateBtn>
      <FlatList
        data={dummyNoteList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteCard note={item} />}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </NotesLayout>
  );
};

export default NoteLists;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
});
