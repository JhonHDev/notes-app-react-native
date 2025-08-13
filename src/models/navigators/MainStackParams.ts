import { Note } from "../Note";

export type MainStackParams = {
  NoteLists: undefined;
  CreateNote: undefined;
  UpdateNote: { note: Note };
  SingleDetailsNote: { note: Note };
  DeletedNotes: undefined;
};
