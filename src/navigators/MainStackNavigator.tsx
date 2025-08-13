import { createStackNavigator } from "@react-navigation/stack";

import { MainStackParams } from "../models/navigators/MainStackParams";

import NoteLists from "../screens/NoteLists";
import CreateNote from "../screens/CreateNote";
import UpdateNote from "../screens/UpdateNote";
import DeletedNotes from "../screens/DeletedNotes";

const Stack = createStackNavigator<MainStackParams>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#cccccc51",
          shadowColor: "#cccccc51",
        },
      }}
    >
      <Stack.Screen
        name="NoteLists"
        component={NoteLists}
        options={{ title: "Lista de Notas" }}
      />

      <Stack.Screen
        name="CreateNote"
        component={CreateNote}
        options={{ title: "Crear Nota" }}
      />

      <Stack.Screen
        name="UpdateNote"
        component={UpdateNote}
        options={{ title: "Actualizar Nota" }}
      />

      <Stack.Screen
        name="DeletedNotes"
        component={DeletedNotes}
        options={{ title: "Notas Eliminadas" }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
