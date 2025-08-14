import { Note } from "../Note";
import { TypeOfNoteCategories } from "../NoteCategories";
import { ImportantNotesStackParams } from "./ImportantNotesStackParams";

export type MainStackParams = {
  NoteLists: undefined;
  CreateNote: undefined;
  UpdateNote: { note: Note };
  SingleDetailsNote: { noteId: number };
  DeletedNotes: undefined;
  NotesByCategory: { category: TypeOfNoteCategories };
  ImportantNotesStackNavigator: {
    screen: keyof ImportantNotesStackParams;
    params?: ImportantNotesStackParams[keyof ImportantNotesStackParams];
  };
};
