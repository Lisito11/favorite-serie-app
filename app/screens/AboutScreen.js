import React from "react";
import { View, Text } from "react-native";

export const AboutScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 16,
          padding: 5,
          margin: 25,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        La serie está terminada y cuenta con 8 temporadas.
      </Text>
      <Text
        style={{
          fontSize: 16,
          padding: 5,
          margin: 25,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        El creador de Game Of Thrones es George R. R. Martin
      </Text>
    </View>
  );
};
