import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useSQLiteContext } from "expo-sqlite";
import { MainStackParams } from "../../models/navigators/MainStackParams";

import { useModal } from "../../hooks/useModal";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

import { getCategoryName } from "../../utils/getCategoryName";
import { getCategoryIcon } from "../../utils/getCategoryIcon";

import { Note } from "../../models/Note";
import { NoteImportant } from "../../models/NoteImportant";
import { getNoteById } from "../../services/notes/getNoteById";

import DeleteNoteModal from "../../components/DeleteNoteModal";
import Loader from "../../components/Loader";
import LoadDataError from "../../components/LoadDataError";
import EmptyNotesAlert from "../../components/EmptyNotesAlert";

interface Props
  extends StackScreenProps<MainStackParams, "SingleDetailsNote"> {}

const SingleDetailsNote = ({ route, navigation }: Props) => {
  const deleteModal = useModal();

  const noteId = route.params.noteId;

  const db = useSQLiteContext();

  const {
    data: note,
    isFetching,
    isLoading,
    isError,
    refetch,
  } = useQuery<Note>({
    queryKey: ["get-single-note", noteId],
    queryFn: () => getNoteById({ db, noteId }),
    initialData: {} as Note,
  });

  const categoryName = getCategoryName(note.category);
  const categoryIcon = getCategoryIcon(note.category, "#1976D2");

  const handleGoToEditNote = () => {
    note && navigation.navigate("UpdateNote", { note });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <LoadDataError refetch={refetch} />;
  }

  if (!isFetching && !note) {
    return <EmptyNotesAlert />;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{note?.title}</Text>
          <Text style={styles.description}>{note?.description}</Text>

          <View style={styles.infoRow}>
            {note?.isImportant === NoteImportant.TRUE && (
              <View style={styles.importantRow}>
                <FontAwesome5 name="fire" size={15} color="#d32f2f" />
                <Text style={styles.important}>¡Nota importante!</Text>
              </View>
            )}

            <View style={styles.categoryRow}>
              {categoryIcon}
              <Text style={styles.category}>{categoryName}</Text>
            </View>
          </View>
        </View>

        <View style={styles.restoreBtnContainer}>
          <TouchableOpacity
            style={[styles.restoreBtn, { backgroundColor: "#054eac" }]}
            onPress={handleGoToEditNote}
          >
            <View style={styles.restoreBtnContent}>
              <MaterialIcons name={"edit"} size={20} color="#fff" />
              <Text style={styles.restoreBtnText}>Editar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.restoreBtn, { backgroundColor: "#d32f2f" }]}
            onPress={deleteModal.openModal}
          >
            <View style={styles.restoreBtnContent}>
              <Entypo name="block" size={20} color="#FFF" />
              <Text style={styles.restoreBtnText}>Desactivar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {deleteModal.isOpen && (
        <DeleteNoteModal noteId={noteId} closeModal={deleteModal.closeModal} />
      )}
    </>
  );
};

export default SingleDetailsNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  card: {
    borderRadius: 10,
    padding: 18,
    marginTop: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  importantRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  important: {
    color: "#d32f2f",
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 8,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    gap: 4,
  },
  category: {
    color: "#1976D2",
    fontWeight: "bold",
    marginLeft: 4,
  },
  restoreBtnContainer: {
    marginTop: 24,
    alignItems: "center",
    gap: 12,
  },
  restoreBtn: {
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  restoreBtnContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  restoreBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
