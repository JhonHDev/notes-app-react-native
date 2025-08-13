import { SQLiteDatabase } from "expo-sqlite";

import { createNotesTable } from "./tables/createNotesTable";

export const initDB = async (db: SQLiteDatabase) => {
  try {
    await createNotesTable(db);
    console.log("Base de datos y tablas inicializadas correctamente!");
  } catch (error) {
    console.error("Error initializing database and tables:", error);
  }
};
