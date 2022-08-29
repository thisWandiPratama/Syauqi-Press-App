//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Login = ({ navigation }) => {
    const [users, setUsers] = useState([
        {
            username: "admin",
            password: "12345678",
            nama: "Admin Syauqi Press",
            email: "admin@gmail.com",
            role: "admin"
        }
    ])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    useEffect(() => {
        getData()
    }, [])

    const getData =async () => {
        const jsonValue = await AsyncStorage.getItem('@users')
        if (jsonValue == null) {
            const jsonValue = JSON.stringify(users)
            await AsyncStorage.setItem('@users', jsonValue)
        }

    }

    const login = async () => {
        if (username.length == 0 || password.length == 0) {
            alert("semua data wajib disini")
        } else {
            const jsonValue = await AsyncStorage.getItem('@users')
            if (jsonValue != null) {
                const data = JSON.parse(jsonValue)
                const dataUser = data.filter(obj => {
                    if (obj.username === username && obj.password == password) {
                        return {
                            username: obj.username,
                            password: obj.password
                        }
                    }
                });

                if (dataUser[0].username == username && dataUser[0].password) {
                    const jsonValue = JSON.stringify(dataUser[0])
                    await AsyncStorage.setItem('@profile', jsonValue)
                    navigation.replace("Home")
                } else {
                    alert("Username atau Password Salah")
                }
            }
        }
    }
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/logo.png")}
                style={{
                    height: "30%",
                    width: "100%",
                    resizeMode: "contain"
                }}
            />
            <View style={{ height: 200, width: "90%" }}>
                <Text style={{ color: "#000", fontSize: 30, fontWeight: "bold" }}>Sign In</Text>
                <View style={{ height: 70, width: "100%", borderBottomColor: "#aeaeae", borderBottomWidth: 1, marginTop: 5 }}>
                    <Text style={{ color: "#000", fontSize: 18 }}>Username</Text>
                    <TextInput
                        onChangeText={(input) => setUsername(input)}
                        placeholder='Masukan username'
                    />
                </View>
                <View style={{ height: 70, width: "100%", borderBottomColor: "#aeaeae", borderBottomWidth: 1, marginTop: 5 }}>
                    <Text style={{ color: "#000", fontSize: 18 }}>Password</Text>
                    <TextInput
                        onChangeText={(input) => setPassword(input)}
                        placeholder='Masukan password'
                    />
                </View>
            </View>
            <View style={{ width: "90%", alignItems: "center", marginTop: 200 }}>
                <TouchableOpacity onPress={() => login()} style={{ height: 50, width: "80%", backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 25, marginTop: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >MASUK </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Register")} style={{ height: 50, width: "80%", backgroundColor: "#2F632C", alignItems: "center", justifyContent: "center", borderRadius: 25, marginTop: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >BUAT AKUN </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center"
    },
});

//make this component available to the app
export default Login;
