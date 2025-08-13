import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { NotificationsStackParams } from "../../models/navigators/NotificationsStackParams";

import NotificationCard from "../../components/NotificationCard";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface Props
  extends StackScreenProps<NotificationsStackParams, "NotificationsList"> {}

const mockNotifications = [
  {
    id: "1",
    title: "¡Importante!",
    body: "Una nota se va eliminar pronto",
    date: "2025-08-12",
    visited: false,
  },
  {
    id: "2",
    title: "¡Te extrañamos!",
    body: "Vuelve y crea tus nuevas notas.",
    date: "2025-08-11",
    visited: true,
  },
];

const NotificationsList = (props: Props) => {
  const navigation = useNavigation<NavigationProp<NotificationsStackParams>>();

  const [notifications, setNotifications] = useState(mockNotifications);

  const handlePress = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, visited: true }
          : notification
      )
    );

    navigation.navigate("SingleNote", {
      note: {
        id: "dummy-id",
        title: "Dummy Note",
        description: "This is a dummy note for testing purposes.",
        isImportant: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationCard
            title={item.title}
            body={item.body}
            date={item.date}
            visited={item.visited}
            onPress={() => handlePress(item.id)}
          />
        )}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
};

export default NotificationsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 7,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 12,
    flexDirection: "column",
  },
  cardUnread: {
    backgroundColor: "#e0e7ef",
  },
  cardVisited: {
    backgroundColor: "#f5f5f5",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: "#888",
    textAlign: "right",
  },
});
