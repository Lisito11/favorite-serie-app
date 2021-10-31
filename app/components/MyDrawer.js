import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutScreen } from './../screens/AboutScreen';
import { MyLifeScreen } from './../screens/MyLifeScreen';
import { MomentsScreen } from './../screens/MomentsScreen';
import { CharactersScreen } from './../screens/CharactersScreen';
import { HomeScreen } from './../screens/HomeScreen';


const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Characters" component={CharactersScreen} />
        <Drawer.Screen name="Moments" component={MomentsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="In My Life" component={MyLifeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
// });
