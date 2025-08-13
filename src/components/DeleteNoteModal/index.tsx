import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { disableNoteById } from "../../services/notes/disableNoteById";
import { useSQLiteContext } from "expo-sqlite";
import { useNavigation } from "@react-navigation/native";
interface Props {
  noteId: number;
  closeModal: () => void;
}

const DeleteNoteModal = ({ noteId, closeModal }: Props) => {
  const db = useSQLiteContext();
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const deleteNoteMutation = useMutation({
    mutationFn: async () => disableNoteById({ db, noteId }),
    onSuccess: () => {
      closeModal();

      queryClient.invalidateQueries({ queryKey: ["get-notes"] });
      queryClient.invalidateQueries({
        queryKey: ["get-important-notes"],
      });

      navigation.goBack();

      Alert.alert(
        "Nota Desactivada",
        "La nota se desactivó con éxito.",
        [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
        { cancelable: false }
      );
    },
  });

  const handleDeleteNote = () => {
    deleteNoteMutation.mutate();
  };

  return (
    <Modal visible={true} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Feather name="alert-circle" size={60} color="#000" />
          <Text style={styles.title}>¿Quieres desactivar esta nota?</Text>
          {deleteNoteMutation.isPending ? (
            <View style={{ justifyContent: "center" }}>
              <ActivityIndicator />
            </View>
          ) : (
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={handleDeleteNote}
              >
                <Text style={styles.btnText}>Sí</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
                <Text style={styles.btnText}>Salir</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default DeleteNoteModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 24,
    gap: 10,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonRow: {
    width: "100%",
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  confirmBtn: {
    backgroundColor: "#e53935",
    paddingVertical: 10,
    paddingHorizontal: 34,
    borderRadius: 6,
    marginRight: 10,
  },
  cancelBtn: {
    backgroundColor: "#bdbdbd",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
