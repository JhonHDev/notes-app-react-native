import React, { useEffect } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useQuery } from "@tanstack/react-query";
import { StackScreenProps } from "@react-navigation/stack";

import { MainStackParams } from "../../models/navigators/MainStackParams";
import { getNotesByCategory } from "../../services/notes/getNotesByCategory";

import { getCategoryName } from "../../utils/getCategoryName";

import Loader from "../../components/Loader";
import LoadDataError from "../../components/LoadDataError";
import NotesLayout from "../../components/NotesLayout";
import NoteCard from "../../components/NoteCard";
import EmptyNotesAlert from "../../components/EmptyNotesAlert";

interface Props extends StackScreenProps<MainStackParams, "NotesByCategory"> {}

const NotesByCategory = ({ route, navigation }: Props) => {
  const category = route.params.category;

  const db = useSQLiteContext();

  const {
    data: notes = [],
    isFetching,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["get-notes-by-category", category],
    queryFn: () => getNotesByCategory({ db, category }),
  });

  useEffect(() => {
    const categoryName = getCategoryName(category);
    const title = category ? `Notas de ${categoryName}` : "Notas por categoría";

    navigation.setOptions({
      title: isFetching ? "Cargando..." : title,
    });
  }, [category, isFetching, navigation]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <LoadDataError refetch={refetch} />;
  }

  if (!isFetching && notes.length === 0) {
    return <EmptyNotesAlert />;
  }

  return (
    <NotesLayout>
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

export default NotesByCategory;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
});
