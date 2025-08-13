import { SQLiteDatabase } from "expo-sqlite";

import { NoteActive } from "../../models/NoteActive";
import { Note } from "../../models/Note";
import { TypeOfNoteCategories } from "../../models/NoteCategories";

interface Params {
  db: SQLiteDatabase;
  category: TypeOfNoteCategories;
}

export const getNotesByCategory = async ({ db, category }: Params) => {
  try {
    const response = await db.getAllAsync(
      `SELECT * FROM notes WHERE category = ? AND isActive = ?`,
      [category, NoteActive.YES]
    );

    console.log(" /// NOTAS PRO CATEGORIA ///");
    console.log(JSON.stringify(response, null, 2));
    console.log(" /// NOTAS PRO CATEGORIA ///");

    return response as Note[];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching notes by category: " + error);
  }
};
