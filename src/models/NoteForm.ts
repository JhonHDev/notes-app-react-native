import { TypeOfNoteCategories } from "./NoteCategories";
import { NoteImportant } from "./NoteImportant";
import { NoteActive } from "./NoteActive";

export interface NoteForm {
  title: string;
  description: string;
  isImportant: NoteImportant;
  category: TypeOfNoteCategories;
  isActive: NoteActive;
  updatedAt: string;
}
