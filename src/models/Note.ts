import { TypeOfNoteCategories } from "./NoteCategories";

export interface Note {
  id: string;
  title: string;
  description: string;
  isImportant?: boolean;
  category: TypeOfNoteCategories;
  createdAt: string;
  updatedAt: string;
  isDeleted?: boolean;
}
