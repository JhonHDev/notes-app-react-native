import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { TypeOfNoteCategories } from "../models/NoteCategories";

export const getCategoryIcon = (type: TypeOfNoteCategories) => {
  switch (type) {
    case TypeOfNoteCategories.work:
      return <MaterialIcons name="work" size={16} color="#FFF" />;
    case TypeOfNoteCategories.study:
      return <MaterialIcons name="school" size={16} color="#FFF" />;
    case TypeOfNoteCategories.personal:
      return <MaterialIcons name="person" size={16} color="#FFF" />;
    case TypeOfNoteCategories.finances:
      return <MaterialIcons name="attach-money" size={16} color="#FFF" />;
    case TypeOfNoteCategories.ideas:
      return <MaterialIcons name="lightbulb" size={16} color="#FFF" />;
    default:
      return <MaterialIcons name="category" size={16} color="#FFF" />;
  }
};
