import { SQLiteDatabase } from "expo-sqlite";
import { Note } from "../../models/Note";
import { NoteActive } from "../../models/NoteActive";

export const getAllNotes = async (db: SQLiteDatabase) => {
  try {
    const response = await db.getAllAsync(
      `SELECT * FROM notes WHERE isActive = ${NoteActive.YES}`
    );
    return response as Note[];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching notes: " + error);
  }
};
