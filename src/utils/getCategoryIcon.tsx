import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { TypeOfNoteCategories } from "../models/NoteCategories";

export const getCategoryIcon = (
  type: TypeOfNoteCategories,
  color: string = "#FFF"
) => {
  switch (type) {
    case TypeOfNoteCategories.work:
      return <MaterialIcons name="work" size={16} color={color} />;
    case TypeOfNoteCategories.study:
      return <MaterialIcons name="school" size={16} color={color} />;
    case TypeOfNoteCategories.personal:
      return <MaterialIcons name="person" size={16} color={color} />;
    case TypeOfNoteCategories.finances:
      return <MaterialIcons name="attach-money" size={16} color={color} />;
    case TypeOfNoteCategories.ideas:
      return <MaterialIcons name="lightbulb" size={16} color={color} />;
    default:
      return <MaterialIcons name="category" size={16} color={color} />;
  }
};
