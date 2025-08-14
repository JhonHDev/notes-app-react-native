import { Note } from "../Note";
import { MainStackParams } from "./MainStackParams";

export type ImportantNotesStackParams = {
  ImportantNotes: undefined;
  UpdateImportantNote: { note: Note };
  MainStackNavigator: {
    screen: keyof MainStackParams;
    params?: MainStackParams[keyof MainStackParams];
  };
};
