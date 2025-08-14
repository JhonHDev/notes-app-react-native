import { SQLiteDatabase } from "expo-sqlite";
import { Note } from "../../models/Note";
import { NoteActive } from "../../models/NoteActive";
import { NoteImportant } from "../../models/NoteImportant";

export const getImportantNotes = async (db: SQLiteDatabase) => {
  try {
    const response = await db.getAllAsync(
      `SELECT * FROM notes WHERE isActive = ? AND isImportant = ?`,
      [NoteActive.TRUE, NoteImportant.TRUE]
    );
    return response as Note[];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching important notes: " + error);
  }
};
