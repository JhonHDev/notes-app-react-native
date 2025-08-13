import { SQLiteDatabase } from "expo-sqlite";

import { NoteForm } from "../../models/NoteForm";
import { NoteImportant } from "../../models/NoteImportant";
import { NoteActive } from "../../models/NoteActive";

interface Params {
  db: SQLiteDatabase;
  note: NoteForm;
}

export const createNote = async ({ db, note }: Params) => {
  const {
    title,
    description,
    isImportant = NoteImportant.NO,
    category,
    isActive = NoteActive.YES,
    createdAt,
    updatedAt,
  } = note;

  const result = await db.runAsync(
    `INSERT INTO notes (title, description, isImportant, category, isActive, createdAt, updatedAt)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, description, isImportant, category, isActive, createdAt, updatedAt]
  );

  console.log(" ---- CREATE NOTE RESP ----- ");
  console.log(JSON.stringify(result, null, 2));
  console.log(" ---- CREATE NOTE RESP ----- ");

  // Retorna la nota creada junto con el id insertado
  return {
    id: result.lastInsertRowId,
    ...note,
  };
};
