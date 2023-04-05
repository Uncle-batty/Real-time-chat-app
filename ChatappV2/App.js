import React, {useState, useContext, useEffect, createContext} from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { supabase } from './Config/supabase';

//screens are imported 
import Chat from "./Screen/Chat";
import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import Home from "./Screen/Home";

//stack navigation cration
const Stack = createStackNavigator();
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


