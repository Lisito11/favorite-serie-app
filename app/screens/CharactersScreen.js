import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  Pressable,
  Alert,
  
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

export const CharactersScreen = () => {
  const characters = [
    {
      id: 1,
      name: "John Snow",
      description:
        'Jon Snow is introduced as the 14-year-old illegitimate son of Eddard "Ned" Stark, Lord of Winterfell, and half-brother to Robb, Sansa, Arya, Bran and Rickon.',
      image: require("../../assets/snow.jpg"),
    },
    {
      id: 2,
      name: "Daenerys Targaryen",
      description:
        'Daenerys Targaryen is the daughter of King Aerys II Targaryen (also referred to as "The Mad King") and his sister-wife Queen Rhaella, and is one of the last survivors of House Targaryen.',
      image: require("../../assets/daenerys.jpg"),
    },
    {
      id: 3,
      name: "Tyrion Lannister",
      description:
        "Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces.",
      image: require("../../assets/tyrion.jpg"),
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [character, setCharacter] = useState({name:'', description:'', image:''});
  const selectedCharacter = (id) => {
    setModalVisible(!modalVisible)
    switch (id) {
      case 1:
        setCharacter(characters[0]);
        break;
      case 2:
        setCharacter(characters[1]);
        break;
      case 3:
        setCharacter(characters[2]);
        break;
      default:
        break;
    }
  };
  return (
    <View>
      <Card>
        <Card.Title>Fav Characters</Card.Title>
        <Card.Divider />
        <View key={1}>
          <TouchableOpacity style={button} onPress={() => selectedCharacter(1)}>
            <Text>John Snow</Text>
          </TouchableOpacity>
        </View>
        <View key={2}>
          <TouchableOpacity style={button} onPress={() => selectedCharacter(2)}>
            <Text>Daenerys Targaryen</Text>
          </TouchableOpacity>
        </View>
        <View key={3}>
          <TouchableOpacity style={button} onPress={() => selectedCharacter(3)}>
            <Text>Tyrion Lannister</Text>
          </TouchableOpacity>
        </View>
      </Card>

      {modalVisible && (
        <Card>
          <Card.Title>{character.name}</Card.Title>
          <Card.Divider />
          <Card.Image source={character.image} style={centerImage}>
            
          </Card.Image>
          <Text style={{ marginBottom: 10 }}>
              {character.description}
            </Text>
        </Card>
      )}
    </View>
  );
};

const { centerImage, button, centeredView, modalView, modalText, textStyle } =
  StyleSheet.create({
    centerImage: {
      height: 200,
      width: 200,
      resizeMode: "cover",
      borderRadius: 1,      
    },
    button: {
      alignItems: "center",
      borderStyle: "solid",
      borderRadius: 5,
      margin: 5,
      padding: 8,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
