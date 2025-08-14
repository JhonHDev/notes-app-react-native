import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { NotificationsStackParams } from "../../models/navigators/NotificationsStackParams";
import { TypeOfNoteCategories } from "../../models/NoteCategories";
import { NoteImportant } from "../../models/NoteImportant";
import { NoteActive } from "../../models/NoteActive";
import { getCategoryName } from "../../utils/getCategoryName";
import { getCategoryIcon } from "../../utils/getCategoryIcon";

import DeletedNotesAlert from "../../components/DeletedNotesAlert";

interface Props
  extends StackScreenProps<NotificationsStackParams, "SingleNote"> {}

const SingleNote = (props: Props) => {
  const note = {
    title: "Título de la nota",
    description:
      "Descripción detallada de la nota. Es esta toda la descripción que hay disponible.",
    isImportant: NoteImportant.TRUE,
    category: TypeOfNoteCategories.work,
    isActive: NoteActive.TRUE,
  };

  const categoryName = getCategoryName(note.category);
  const categoryIcon = getCategoryIcon(note.category, "#1976D2");

  return (
    <View style={styles.container}>
      <DeletedNotesAlert />
      <View style={styles.card}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.description}>{note.description}</Text>
        <View style={styles.infoRow}>
          {note.isImportant && (
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
        <TouchableOpacity style={styles.restoreBtn} onPress={() => {}}>
          <View style={styles.restoreBtnContent}>
            <FontAwesome5 name="undo" size={18} color="#fff" />
            <Text style={styles.restoreBtnText}>Restaurar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleNote;

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
  },
  restoreBtn: {
    backgroundColor: "#1b5e20",
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
