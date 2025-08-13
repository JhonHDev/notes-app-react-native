import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Foundation from "@expo/vector-icons/Foundation";

interface Props {
  refetch: () => void;
}

const LoadDataError = ({ refetch }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.container}>
        <Foundation name="alert" size={50} color="#d32f2f" />
        <Text style={styles.text}>Hubo un error al cargar los datos.</Text>
        <Button title="Refrescar" onPress={refetch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    minHeight: 120,
    paddingVertical: 10,
    backgroundColor: "#fff3f3",
    borderRadius: 8,
    margin: 16,
    elevation: 2,
    gap: 10,
  },
  text: {
    color: "#d32f2f",
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default LoadDataError;
