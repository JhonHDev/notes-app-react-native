import "react-native-gesture-handler";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./src/navigators/BottomTabNavigator";

import { SQLiteProvider } from "expo-sqlite";
import { initDB } from "./src/services/initDB";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SQLiteProvider databaseName="notes_app.db" onInit={initDB}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SQLiteProvider>
    </QueryClientProvider>
  );
}
