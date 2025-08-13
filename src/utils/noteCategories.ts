import { NoteCategory } from "../models/NoteCategory";
import { TypeOfNoteCategories } from "../models/NoteCategories";

export const noteCategories: NoteCategory[] = [
  {
    id: "1",
    name: "Trabajo",
    type: TypeOfNoteCategories.work,
  },
  {
    id: "2",
    name: "Estudio",
    type: TypeOfNoteCategories.study,
  },
  {
    id: "3",
    name: "Personal",
    type: TypeOfNoteCategories.personal,
  },
  {
    id: "4",
    name: "Finanzas",
    type: TypeOfNoteCategories.finances,
  },
  {
    id: "5",
    name: "Ideas",
    type: TypeOfNoteCategories.ideas,
  },
  {
    id: "6",
    name: "Otros",
    type: TypeOfNoteCategories.other,
  },
];
