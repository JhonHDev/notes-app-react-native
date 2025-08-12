import { Note } from "../Note";

export type MainStackParams = {
  NoteLists: undefined;
  CreateNote: undefined;
  UpdateNote: { note: Note };
  DeletedNotes: undefined;
};
