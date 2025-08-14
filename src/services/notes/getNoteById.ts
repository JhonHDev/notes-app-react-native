import { SQLiteDatabase } from "expo-sqlite";
import { NoteActive } from "../../models/NoteActive";
import { Note } from "../../models/Note";

interface Params {
  db: SQLiteDatabase;
  noteId: number;
}

export const getNoteById = async ({ db, noteId }: Params): Promise<Note> => {
  try {
    const response = await db.getAllAsync(
      `SELECT * FROM notes WHERE id = ? AND isActive = ?`,
      [noteId, NoteActive.TRUE]
    );

    console.log(" /// NOTAS PRO id ///");
    console.log(response[0]);
    console.log(" /// NOTAS PRO id ///");
    return response[0] as Note;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching notes by category: " + error);
  }
};
