import { createStackNavigator } from "@react-navigation/stack";

import { ImportantNotesStackParams } from "../models/navigators/ImportantNotesStackParams";

import ImportantNotes from "../screens/ImportantNotes";
import UpdateImportantNote from "../screens/UpdateImportantNote";

const Stack = createStackNavigator<ImportantNotesStackParams>();

const ImportantNotesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ImportantNotes"
        component={ImportantNotes}
        options={{ title: "Notas Importantes" }}
      />

      <Stack.Screen
        name="UpdateImportantNote"
        component={UpdateImportantNote}
        options={{ title: "Actualizar Nota" }}
      />
    </Stack.Navigator>
  );
};

export default ImportantNotesStackNavigator;
