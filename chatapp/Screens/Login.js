import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert }from "react-native";   
import { signInWithEmailAndPassword  } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../Config/firebase";

const Login = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const  OnLogin = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
             .then(() => navigation.navigate("Home"))
             .catch((err) => Alert.alert("Login failled", err.message))
        }
    }
    return (
        <View style={styles.container}>
            <View>
            <Image source={require("../assets/backImage.png")} style={styles.bg_img}></Image>
            </View>
            
            <View style={styles.white_bg}>
          
            <SafeAreaView style={styles.form}>
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.textbox} placeholder="Enter Email" autoFocus={true} value={email} onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput style={styles.textbox} placeholder="Enter PAsswrod" autoCorrect={false} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
            <TouchableOpacity  style={styles.Btn} onPress={OnLogin}><Text style={styles.text}>Login</Text></TouchableOpacity>
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
        backgroundColor: "#000000",
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
        backgroundColor: '#CD202D',
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
        color: '#AE8569',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingBottom: 24

    }
    
 
    })

