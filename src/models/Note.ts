import { NoteImportant } from "./NoteImportant";
import { TypeOfNoteCategories } from "./NoteCategories";
import { NoteActive } from "./NoteActive";

export interface Note {
  id?: string;
  title: string;
  description: string;
  isImportant: NoteImportant;
  category: TypeOfNoteCategories;
  isActive: NoteActive;
  createdAt: string;
  updatedAt: string;
}
