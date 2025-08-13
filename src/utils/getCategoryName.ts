import { TypeOfNoteCategories } from "../models/NoteCategories";
import { noteCategories } from "./noteCategories";

export const getCategoryName = (currentCategory: TypeOfNoteCategories) => {
  // Permitir que currentCategory sea número, string o enum
  const found = noteCategories.find(
    (category) =>
      category.type === currentCategory ||
      category.id === String(currentCategory)
  );
  return found?.name || String(currentCategory);
};
