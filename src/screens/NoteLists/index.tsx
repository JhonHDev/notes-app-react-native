import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useQuery } from "@tanstack/react-query";

import { getAllNotes } from "../../services/notes/getAllNotes";

import Loader from "../../components/Loader";
import LoadDataError from "../../components/LoadDataError";
import NotesLayout from "../../components/NotesLayout";
import NoteCard from "../../components/NoteCard";

const NoteLists = () => {
  const db = useSQLiteContext();

  const {
    data: notes = [],
    isFetching,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["get-notes"],
    queryFn: () => getAllNotes(db),
  });

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <LoadDataError refetch={refetch} />;
  }

  return (
    <NotesLayout showCategories showCreateBtn>
      <FlatList
        data={notes}
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
