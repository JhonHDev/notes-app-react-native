import { SQLiteDatabase } from "expo-sqlite";
import { NoteForm } from "../../models/NoteForm";

interface Params {
  db: SQLiteDatabase;
  noteId: number;
  note: NoteForm;
}

export const updateNote = async ({ db, noteId, note }: Params) => {
  try {
    const { title, description, isImportant, category, isActive, updatedAt } =
      note;

    const resp = await db.runAsync(
      `UPDATE notes SET title = ?, description = ?, isImportant = ?, category = ?, isActive = ?, updatedAt = ? WHERE id = ?`,
      [title, description, isImportant, category, isActive, updatedAt, noteId]
    );

    console.log("--- NOTA ACTUALIZA RESP ----");
    console.log(JSON.stringify(resp, null, 2));
    console.log("--- NOTA ACTUALIZA RESP ----");
    /*
    // Obtener la nota actualizada y devolverla
    const updatedNotes = await db.getAllAsync(
      `SELECT * FROM notes WHERE id = ?`,
      [noteId]
    );
    const updatedNote = updatedNotes.length > 0 ? updatedNotes[0] : null;

    */
    //console.log(" ---- UPDATED NOTE ----- ");
    //console.log(JSON.stringify(updatedNote, null, 2));
    //return updatedNote;
  } catch (error) {
    console.log(error);
    throw new Error("Error updating one note: " + error);
  }
};
