import React from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useQuery } from "@tanstack/react-query";

import { getAllNotes } from "../../services/notes/getAllNotes";

import Loader from "../../components/Loader";
import LoadDataError from "../../components/LoadDataError";
import NotesLayout from "../../components/NotesLayout";
import NoteCard from "../../components/NoteCard";
import EmptyNotesAlert from "../../components/EmptyNotesAlert";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParams } from "../../models/navigators/MainStackParams";

interface Props extends StackScreenProps<MainStackParams, "NoteLists"> {}

const NoteLists = ({ navigation }: Props) => {
  const db = useSQLiteContext();

  const {
    data: notes = [],
    isFetching,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["get-notes"],
    queryFn: () => getAllNotes(db),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <LoadDataError refetch={refetch} />;
  }

  if (!isFetching && notes.length === 0) {
    return <EmptyNotesAlert showCreateBtn />;
  }

  return (
    <NotesLayout showCategories showCreateBtn>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NoteCard
            note={item}
            goToSingleNote={() => {
              navigation.navigate("SingleDetailsNote", { noteId: item.id });
            }}
          />
        )}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
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
