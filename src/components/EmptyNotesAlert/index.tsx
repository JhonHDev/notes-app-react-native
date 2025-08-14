import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

import Foundation from "@expo/vector-icons/Foundation";
import CreateNoteBtn from "../CreateNoteBtn";

interface Props {
  showCreateBtn?: boolean;
}

const EmptyNotesAlert = ({ showCreateBtn }: Props) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          height: Dimensions.get("window").height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          <Foundation name="info" size={50} color="#1976d2" />
          <Text style={styles.text}>No hay notas disponibles.</Text>
        </View>
      </View>

      {showCreateBtn && <CreateNoteBtn />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    minHeight: 120,
    paddingVertical: 10,
    backgroundColor: "#e3f2fd",
    borderRadius: 8,
    margin: 16,
    elevation: 2,
    gap: 10,
  },
  text: {
    color: "#1976d2",
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default EmptyNotesAlert;
