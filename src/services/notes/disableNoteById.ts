import { SQLiteDatabase } from "expo-sqlite";
import { NoteActive } from "../../models/NoteActive";

interface Params {
  db: SQLiteDatabase;
  noteId: number;
}

export const disableNoteById = async ({ db, noteId }: Params) => {
  try {
    return await db.runAsync(`UPDATE notes SET isActive = ? WHERE id = ?`, [
      NoteActive.FALSE,
      noteId,
    ]);
  } catch (error) {
    console.error(error);
    throw new Error("Error disabling note by id: " + error);
  }
};
