import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { BottomTabParams } from "../models/navigators/BottomTabParams";

import MainStackNavigator from "./MainStackNavigator";
import ImportantNotesStackNavigator from "./ImportantNotesStackNavigator";

const Tab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
