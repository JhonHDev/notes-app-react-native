import { Note } from "../Note";
import { TypeOfNoteCategories } from "../NoteCategories";

export type MainStackParams = {
  NoteLists: undefined;
  CreateNote: undefined;
  UpdateNote: { note: Note };
  SingleDetailsNote: { note: Note };
  DeletedNotes: undefined;
  NotesByCategory: { category: TypeOfNoteCategories };
};
