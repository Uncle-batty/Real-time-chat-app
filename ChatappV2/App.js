import 'react-native-gesture-handler';
import React, {useState, useContext, useEffect, createContext} from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { supabase } from './Config/supabase';
import { createDrawerNavigator } from '@react-navigation/drawer';

//screens are imported 
import Chat from "./Screen/Chat";
import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import Home from "./Screen/Home";
import Settings  from './Screen/Settings';
import Profile from './Screen/Profile';

// navigation cration
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
//stacks 
function Screenstack () {
  return (
    <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Chat" component={Chat}  /> 
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}
// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Settings" component={Settings} />
//       <Drawer.Screen name="Profile" component={Profile} />
//     </Drawer.Navigator>
//   );
// }
function Homenavigator() {
  return (
    <NavigationContainer>
        <Screenstack /> 
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Homenavigator />
    
  );
}


