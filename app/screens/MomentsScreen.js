import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const MomentsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Mejores Momentos</Text>
      <Image source={require("../../assets/momento1.jpg")} style={centerImage}/>
      <Image source={require("../../assets/momento2.jpg")} style={centerImage}/>
      <Image source={require("../../assets/momento3.jpg")} style={centerImage}/>
    </View>
  );
};
const {centerImage} =
  StyleSheet.create({
    centerImage: {
      height: 180,
      width: 180,
      resizeMode: "cover",
      borderRadius: 5,
      padding:5,
      margin:5      
    },
  })