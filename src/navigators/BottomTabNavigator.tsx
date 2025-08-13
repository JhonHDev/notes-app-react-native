import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { BottomTabParams } from "../models/navigators/BottomTabParams";
import Ionicons from "@expo/vector-icons/Ionicons";

import MainStackNavigator from "./MainStackNavigator";
import ImportantNotesStackNavigator from "./ImportantNotesStackNavigator";
import NotificationsNavigator from "./NotificationsNavigator";

const Tab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#054eac",
      }}
    >
      <Tab.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          title: "Notas",
          tabBarIcon(props) {
            return <FontAwesome5 name="tasks" size={20} color={props.color} />;
          },
        }}
      />

      <Tab.Screen
        name="ImportantNotesStackNavigator"
        component={ImportantNotesStackNavigator}
        options={{
          title: "Importantes",
          tabBarIcon(props) {
            return <FontAwesome5 name="fire" size={20} color={props.color} />;
          },
        }}
      />

      <Tab.Screen
        name="NotificationsNavigator"
        component={NotificationsNavigator}
        options={{
          title: "Notificaciones",
          tabBarIcon(props) {
            return (
              <Ionicons name="notifications" size={20} color={props.color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
