import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { useSQLiteContext } from "expo-sqlite";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Note } from "../../models/Note";
import { TypeOfNoteCategories } from "../../models/NoteCategories";
import { NoteImportant } from "../../models/NoteImportant";
import { NoteActive } from "../../models/NoteActive";

import { noteCategories } from "../../utils/noteCategories";
import { getCategoryIcon } from "../../utils/getCategoryIcon";
import { createNote } from "../../services/notes/createNote";
import { updateNote } from "../../services/notes/updateNote";
interface FormValues {
  title: string;
  description: string;
  isImportant: NoteImportant;
  category: TypeOfNoteCategories;
}

interface Props {
  note?: Note;
}

const NotesForm = ({ note }: Props) => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      title: note?.title || "",
      description: note?.description || "",
      isImportant: note?.isImportant ?? NoteImportant.FALSE,
      category: note?.category ?? TypeOfNoteCategories.other,
    },
  });

  // Si cambia la nota, setear valores
  useEffect(() => {
    if (note) {
      setValue("title", note.title || "");
      setValue("description", note.description || "");
      setValue("isImportant", note.isImportant ?? NoteImportant.FALSE);
      setValue("category", note.category ?? TypeOfNoteCategories.other);
    }
  }, [note, setValue]);

  const db = useSQLiteContext();
  const queryClient = useQueryClient();

  const createNoteMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const noteToSave = {
        ...data,
        isActive: NoteActive.TRUE,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      return await createNote({
        db,
        note: noteToSave,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-notes"] });
      queryClient.invalidateQueries({
        queryKey: ["get-important-notes"],
      });

      navigation.goBack();

      Alert.alert(
        "Nota creada",
        "La nota se creó con éxito.",
        [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
        { cancelable: false }
      );

      reset();
    },
  });

  const updateNoteMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const noteToUpdate = {
        ...data,
        isActive: NoteActive.TRUE,
        updatedAt: new Date().toISOString(),
      };

      console.log(JSON.stringify(noteToUpdate, null, 2));

      if (note?.id) {
        return await updateNote({
          db,
          noteId: note?.id,
          note: noteToUpdate,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-notes"] });
      queryClient.invalidateQueries({ queryKey: ["get-single-note"] });
      queryClient.invalidateQueries({
        queryKey: ["get-important-notes"],
      });

      navigation.goBack();

      Alert.alert(
        "Nota actualizada",
        "La nota se actualizó con éxito.",
        [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
        { cancelable: false }
      );

      reset();
    },
  });

  const onFormSubmit = (data: FormValues) => {
    if (note) {
      updateNoteMutation.mutate(data);
      return;
    }

    createNoteMutation.mutate(data);
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Controller
        control={control}
        name="title"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.title && styles.inputError]}
            placeholder={errors.title ? "Título requerido" : "Título"}
            placeholderTextColor={errors.title ? "#ff4d4f" : "#888"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      {/* Descripción */}
      <Controller
        control={control}
        name="description"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              styles.textArea,
              errors.description && styles.inputError,
            ]}
            placeholder={
              errors.description ? "Descripción requerida" : "Descripción"
            }
            placeholderTextColor={errors.description ? "#ff4d4f" : "#888"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline
            numberOfLines={4}
          />
        )}
      />

      {/* Categoría */}
      <Text style={styles.categoryTitle}>Selecciona una categoría:</Text>
      <Controller
        control={control}
        name="category"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.categoriesRow}>
            {noteCategories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryBtn,
                  value === cat.type && styles.categoryBtnSelected,
                  value === cat.type && {
                    shadowColor: "#054eac",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                  },
                ]}
                onPress={() => onChange(cat.type)}
                activeOpacity={0.8}
              >
                <View style={styles.categoryContent}>
                  {getCategoryIcon(
                    cat.type,
                    value === cat.type ? "#FFF" : "#3e3b3bff"
                  )}
                  <Text
                    style={[
                      styles.categoryBtnText,
                      value === cat.type && styles.categoryBtnTextSelected,
                    ]}
                  >
                    {cat.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />

      {/* Switch de importante */}
      <View style={styles.switchRow}>
        <Controller
          control={control}
          name="isImportant"
          render={({ field: { onChange, value } }) => (
            <>
              <Switch
                value={value === NoteImportant.TRUE}
                onValueChange={() =>
                  onChange(
                    value === NoteImportant.TRUE
                      ? NoteImportant.FALSE
                      : NoteImportant.TRUE
                  )
                }
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={
                  value === NoteImportant.TRUE ? "#054eac" : "#f4f3f4"
                }
                style={{ marginRight: 8 }}
              />
              <Text style={styles.switchLabel}>Importante</Text>
            </>
          )}
        />
      </View>

      {/* Botón de crear */}
      <TouchableOpacity
        style={[
          styles.button,
          createNoteMutation.isPending && { opacity: 0.7 },
          updateNoteMutation.isPending && { opacity: 0.7 },
        ]}
        onPress={handleSubmit(onFormSubmit)}
        disabled={createNoteMutation.isPending || updateNoteMutation.isPending}
      >
        <View style={styles.buttonContent}>
          {createNoteMutation.isPending || updateNoteMutation.isPending ? (
            <MaterialIcons
              name="hourglass-empty"
              size={20}
              color="#fff"
              style={{ marginRight: 8 }}
            />
          ) : (
            <MaterialIcons
              name={note ? "edit" : "add"}
              size={20}
              color="#fff"
              style={{ marginRight: 8 }}
            />
          )}
          <Text style={styles.buttonText}>
            {createNoteMutation.isPending || updateNoteMutation.isPending
              ? "Procesando..."
              : note
              ? "Actualizar"
              : "Crear"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NotesForm;

const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  successText: {
    color: "#4BB543",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  errorText: {
    color: "#ff4d4f",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  container: {
    gap: 16,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#222",
  },
  inputError: {
    borderColor: "#ff4d4f",
    color: "#ff4d4f",
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#222",
  },
  categoriesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  categoryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 24,
    backgroundColor: "#f5f7fa",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginRight: 8,
    marginBottom: 8,
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  categoryContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
  },
  categoryBtnSelected: {
    backgroundColor: "#054eac",
    borderColor: "#054eac",
  },
  categoryBtnText: {
    color: "#222",
    fontSize: 15,
  },
  categoryBtnTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  switchLabel: {
    fontSize: 16,
    color: "#222",
  },
  button: {
    backgroundColor: "#054eac",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
