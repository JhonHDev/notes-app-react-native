import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useQuery } from "@tanstack/react-query";

import { getImportantNotes } from "../../services/notes/getImportantNotes";

import Loader from "../../components/Loader";
import LoadDataError from "../../components/LoadDataError";
import NotesLayout from "../../components/NotesLayout";
import NoteCard from "../../components/NoteCard";

const ImportantNotes = () => {
  const db = useSQLiteContext();

  const {
    data: importantNotes = [],
    isFetching,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["get-important-notes"],
    queryFn: () => getImportantNotes(db),
  });

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <LoadDataError refetch={refetch} />;
  }

  return (
    <NotesLayout>
      <FlatList
        data={importantNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteCard note={item} />}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </NotesLayout>
  );
};

export default ImportantNotes;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
});
