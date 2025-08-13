import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Foundation from "@expo/vector-icons/Foundation";

const DeletedNotesAlert = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Foundation name="alert" size={30} color="#856404" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>¡Atención!</Text>
        <Text style={styles.message}>
          Esta nota se eliminará pronto. Recupérala si la necesitas.
        </Text>
      </View>
    </View>
  );
};

export default DeletedNotesAlert;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF3CD",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#FFECB3",
  },
  iconContainer: {
    marginRight: 12,
  },
  icon: {
    fontSize: 28,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#856404",
    marginBottom: 2,
  },
  message: {
    fontSize: 14,
    color: "#856404",
  },
});
