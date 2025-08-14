import { createStackNavigator } from "@react-navigation/stack";

import { ImportantNotesStackParams } from "../models/navigators/ImportantNotesStackParams";

import ImportantNotes from "../screens/ImportantNotes";
import UpdateImportantNote from "../screens/UpdateImportantNote";
import MainStackNavigator from "./MainStackNavigator";

const Stack = createStackNavigator<ImportantNotesStackParams>();

const ImportantNotesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ImportantNotes"
        component={ImportantNotes}
        options={{
          title: "Notas Importantes",
          cardStyle: { backgroundColor: "#FFF" },
        }}
      />

      <Stack.Screen
        name="UpdateImportantNote"
        component={UpdateImportantNote}
        options={{
          title: "Actualizar Nota",
          cardStyle: { backgroundColor: "#FFF" },
        }}
      />

      <Stack.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ImportantNotesStackNavigator;
