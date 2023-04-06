import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert }from "react-native";   
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../Config/supabase"
const Login = () => {
    const navigation = useNavigation();//Allows use of navigation
    const [email, setEmail] = useState("");//variable decloration
    const [password, setPassword] = useState("");
     const  handleSignin= async () => {
        if (email !== "" && password !== "") {
            //
            const { data, error } = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password,
            })
            if(data.user != null) {
               navigation.navigate("Home")
             }
             else 
             {
              console.log(error)
             }
        }
    }
//   const handleSignin = async () => {
//   try {
//     console.log(email, password); // Debugging statement
//     const { data, error } = await supabase.auth.signInWithPassword(email, password);
//     if (data) {
//       navigation.navigate("Home");
//     }
//     if (error) {
//       Alert.alert("Login failed", error.message);
//     }
//   } catch (error) {
//     console.log(error); // Log the error to the console
//   }
// };

    

  return (
   <View style={styles.container}>
            <View>
            <Image source={require("../assets/backimg.jpg")} style={styles.bg_img}></Image>
            </View>
            
            <View style={styles.white_bg}>
          
            <SafeAreaView style={styles.form}>
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.textbox} placeholder="Enter Email" autoFocus={true} value={email} onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput style={styles.textbox} placeholder="Enter PAsswrod" autoCorrect={false} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
            <TouchableOpacity  style={styles.Btn} onPress={handleSignin} ><Text style={{ color: '#3eacec',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingBottom: 24}}>Login</Text></TouchableOpacity>
            </SafeAreaView>
            <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Dont Have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={{color: 'red', fontWeight: '600', fontSize: 14}}>sign up</Text>
                </TouchableOpacity>
            </View>

            </View>
        </View>
  )
}

export default Login


const styles = StyleSheet.create({ container: {
        flex: 1,
        backgroundColor: "#efefef",
    },
    bg_img: {
       width: '100%' ,
       height: 340,
       position: "absolute",
       top: 0,
       resizeMode: 'cover'
    },
     white_bg: {
        backgroundColor: "#172969",
        width: '100%' ,
        height: '70%',
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    textbox: {
        backgroundColor: "#efefef",
        height: 60,
        marginBottom: 20,
        fontSize: 16,
        top: 0,
        borderRadius: 10,
        padding: 12,
    },
    Btn: {
        backgroundColor: '#ff5f0d',
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 40,
        borderRadius: 15,
        
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 45
    },
    text: {
        color: '#3eacec',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingBottom: 24

    }
    
 
    })