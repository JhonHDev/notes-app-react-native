import React from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useQuery } from "@tanstack/react-query";

import { getImportantNotes } from "../../services/notes/getImportantNotes";

import Loader from "../../components/Loader";
import LoadDataError from "../../components/LoadDataError";
import NotesLayout from "../../components/NotesLayout";
import NoteCard from "../../components/NoteCard";
import EmptyNotesAlert from "../../components/EmptyNotesAlert";

const ImportantNotes = () => {
  const db = useSQLiteContext();

  const {
    data: importantNotes = [],
    isFetching,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["get-important-notes"],
    queryFn: () => getImportantNotes(db),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <LoadDataError refetch={refetch} />;
  }

  if (!isFetching && importantNotes.length === 0) {
    return <EmptyNotesAlert />;
  }

  return (
    <NotesLayout>
      <FlatList
        data={importantNotes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteCard note={item} />}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
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
