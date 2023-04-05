import React, {useState, useContext, useEffect, createContext} from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { onAuthStateChanged } from "firebase/auth";


//screens
import Chat from "./Screens/Chat";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Home from "./Screens/Home";

import auth from "./Config/firebase";

//stacks
const Stack = createStackNavigator();

// const AuthenticatedUserContext = createContext({});
// const AuthenticatedUserProvider = ({ children}) => {
//   const [user, setUser] = useState(null);
//   return (
//     <AuthenticatedUserContext.Provider value={[user, setUser]}>
//       {children}
//     </AuthenticatedUserContext.Provider>
//   )
// }


function Chatstack () {
  return (
    <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Chat" component={Chat}  /> 
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

// function Logedinstack () {
//   return (
//     <Stack.Navigator defaultScreenOptions={Login} screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Login" component={Login} /> 
//         <Stack.Screen name="Signup" component={Signup} />
//     </Stack.Navigator>
//   )
// }




function Homenavigator() {
  // const { user, setUser } = useContext(AuthenticatedUserContext);
  // const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (AuthenticatedUser) => {
  //     AuthenticatedUser ? setUser(AuthenticatedUser) : setUser(null);
  //     setloading(false);
  //   }).catch((error) => console.log(error));

  //   return unsubscribe; // cleanup function
  // }, []); // empty dependency array

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer>
       <Chatstack /> 
    </NavigationContainer>
  );
}



export default function App() {
  return (
    <Homenavigator />
    
  );
}

