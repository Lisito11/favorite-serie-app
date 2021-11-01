import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={mainContainer}>
      <Image
        style={centerImage}
        source={require('../../assets/portada.jpg')}
      />
    </View>
  );
};

const {centerImage, mainContainer} = StyleSheet.create({
  mainContainer:{ flex: 1, alignItems: "center", justifyContent: "center" },
  centerImage: {
    height:600,
    width:300,
    resizeMode: 'center',
    borderRadius:20
  },
});