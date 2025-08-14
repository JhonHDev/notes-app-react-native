import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { TypeOfNoteCategories } from "../models/NoteCategories";

export const getCategoryIcon = (
  type: TypeOfNoteCategories,
  color: string = "#FFF"
) => {
  switch (type) {
    case TypeOfNoteCategories.work:
    case "work":
      return <MaterialIcons name="work" size={16} color={color} />;
    case TypeOfNoteCategories.study:
    case "study":
      return <MaterialIcons name="school" size={16} color={color} />;
    case TypeOfNoteCategories.personal:
    case "personal":
      return <MaterialIcons name="person" size={16} color={color} />;
    case TypeOfNoteCategories.finances:
    case "finances":
      return <MaterialIcons name="attach-money" size={16} color={color} />;
    case TypeOfNoteCategories.ideas:
    case "ideas":
      return <MaterialIcons name="lightbulb" size={16} color={color} />;
    case TypeOfNoteCategories.other:
    case "other":
      return <MaterialIcons name="category" size={16} color={color} />;
    default:
      return <MaterialIcons name="category" size={16} color={color} />;
  }
};
