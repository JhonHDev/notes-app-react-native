import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { MainStackParams } from "../../models/navigators/MainStackParams";
import { NoteImportant } from "../../models/NoteImportant";
import { Note } from "../../models/Note";

import { formatDate } from "../../utils/formatDate";
import { getCategoryName } from "../../utils/getCategoryName";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  const createdDate = formatDate(note.createdAt);

  const handleGoToUpdateNote = () => {
    navigation.navigate("UpdateNote", { note });
  };

  const categoryName = getCategoryName(note.category);

  return (
    <TouchableOpacity onPress={handleGoToUpdateNote}>
      <View style={styles.cardContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {note.title}
            </Text>
            {note.isImportant === NoteImportant.YES && (
              <FontAwesome5 name="fire" size={15} color="red" />
            )}
            <Text style={styles.category}>{categoryName}</Text>
          </View>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {note.description}
          </Text>

          <Text style={styles.dateText}>Creada el {createdDate}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    padding: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 14,
  },
  contentContainer: {
    width: "80%",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 6,
    marginBottom: 6,
  },
  category: {
    backgroundColor: "#E3F2FD",
    color: "#1976D2",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 12,
    color: "#666",
  },
});
