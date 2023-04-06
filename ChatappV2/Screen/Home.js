import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../colors";
import { Entypo } from "@expo/vector-icons";
import { supabase } from "../Config/supabase"

const SignOut = async () => {
 const { error } = await supabase.auth.signOut()
 if (error)
  {
    console.log(error)
  }
  else{
    navigation.navigate("Login")
  }
 
}
const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          name="search"
          size={24}
          color={Colors.gray}
          style={{ marginLeft: 15 }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Chat")}
      >
        <Entypo name="chat" size={24} color={Colors.lightGray} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn2}
        onPress={() =>  SignOut}
      >
        <Entypo name="log-out" size={24} color={Colors.lightGray} />
      </TouchableOpacity>

    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#CD202D",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
   btn2: {
    backgroundColor: "#CD202D",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});