import { TypeOfNoteCategories } from "./NoteCategories";

export interface NoteCategory {
  id: string;
  name: string;
  type: TypeOfNoteCategories;
}
