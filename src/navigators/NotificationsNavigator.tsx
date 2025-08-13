import { createStackNavigator } from "@react-navigation/stack";

import { NotificationsStackParams } from "../models/navigators/NotificationsStackParams";

import NotificationsList from "../screens/NotificationsList";
import SingleNote from "../screens/SingleNote";

const Stack = createStackNavigator<NotificationsStackParams>();

const NotificationsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#cccccc51",
          shadowColor: "#cccccc51",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="NotificationsList"
        component={NotificationsList}
        options={{ title: "Notificaciones" }}
      />

      <Stack.Screen
        name="SingleNote"
        component={SingleNote}
        options={{ title: "Nota" }}
      />
    </Stack.Navigator>
  );
};

export default NotificationsNavigator;
