//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Register = ({ navigation }) => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@users')
            if (jsonValue != null) {
                setUsers(JSON.parse(jsonValue))
            }

        } catch (e) {
        }
    }

    const save = async () => {
        if (username.length == 0 || password.length == 0 || nama.length == 0 || email.length == 0) {
            alert("Semua data wajib diisi")
        } else {


            const user = {
                username: username,
                password: password,
                nama: nama,
                email: email,
                role: "user"
            }

            // Menyimpan ke async storage pemyimpan dimemory hp
            const save = [...users, user]
            const jsonValue = JSON.stringify(save)
            await AsyncStorage.setItem('@users', jsonValue)

            navigation.navigate("Login")
            alert("Sign Up Success")
        }

    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{
                flexDirection: "row",
                height: 50,
                alignItems: "center",
                width: "100%"
            }}>
                <Image
                    source={require("../assets/left.png")}
                    style={{
                        height: 50,
                        width: 50,
                        resizeMode: "contain",
                    }}
                />
                <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ height: 200, width: "90%" }}>
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
                    <View style={{ height: 70, width: "100%", borderBottomColor: "#aeaeae", borderBottomWidth: 1, marginTop: 5 }}>
                        <Text style={{ color: "#000", fontSize: 18 }}>Nama Lengkap</Text>
                        <TextInput
                            onChangeText={(input) => setNama(input)}
                            placeholder='Masukan Nama Lengkap'
                        />
                    </View>
                    <View style={{ height: 70, width: "100%", borderBottomColor: "#aeaeae", borderBottomWidth: 1, marginTop: 5 }}>
                        <Text style={{ color: "#000", fontSize: 18 }}>Email Address</Text>
                        <TextInput
                            onChangeText={(input) => setEmail(input)}
                            placeholder='Masukan email address'
                        />
                    </View>
                </View>
                <View style={{ width: "90%", alignItems: "center", marginTop: 200 }}>
                    <TouchableOpacity onPress={() => save()} style={{ height: 50, width: "80%", backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 25, marginTop: 20 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >BUAT AKUN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Register;
