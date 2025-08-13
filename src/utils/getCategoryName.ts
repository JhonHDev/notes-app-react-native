import { TypeOfNoteCategories } from "../models/NoteCategories";
import { noteCategories } from "./noteCategories";

export const getCategoryName = (currentCategory: TypeOfNoteCategories) => {
  return (
    noteCategories.find((category) => category.type === currentCategory)
      ?.name || currentCategory
  );
};
