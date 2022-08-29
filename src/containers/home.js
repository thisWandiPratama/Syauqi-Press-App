//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ToastAndroid, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Home = ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
        console.log(data)
    }, [])

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@profile')
            if (jsonValue != null) {
                setData(JSON.parse(jsonValue))
            }
        } catch (e) {
        }
    }

    const logout = async () => await AsyncStorage.removeItem("profile");

    const alertLogout = () => {
        Alert.alert(
            'Peringatan',
            'Apakah Anda Yakin Ingin Logout ?',
            [
                {
                    text: 'Batal',
                    onPress: () => ToastAndroid.show("Logout Cancled", ToastAndroid.SHORT),
                },
                {
                    text: 'Logout', onPress: () => {
                        logout()
                        navigation.replace("Login")
                    }
                },
            ],
            { cancelable: false },
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 50, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ marginLeft: 15, marginTop: 20, color: "#000", fontWeight: "bold", fontSize: 12 }}>Hallo, {data.nama} </Text>
                    {
                        data.role != "user" ? <TouchableOpacity onPress={() => navigation.navigate("Orderan")}>
                            <Text style={{ marginLeft: 15, marginTop: 20, color: "#000", fontWeight: "bold", fontSize: 20 }}>Order Masuk </Text>
                        </TouchableOpacity>
                            :
                            null
                    }
                    <TouchableOpacity onPress={() => alertLogout()}>
                        <Text style={{ marginLeft: 15, marginTop: 20, color: "#000", fontWeight: "bold", fontSize: 20, color: "red" }}>Logout </Text>
                    </TouchableOpacity>
                </View>
                {/* best product */}
                <View style={{ height: 250, marginLeft: 15, marginTop: 6 }}>
                    <Text style={{ fontSize: 20, color: "red", fontWeight: "bold" }}>BEST PRODUCT</Text>
                    <View style={{ height: 250, width: "100%", flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Product1")} style={{ height: 250, width: 150, alignItems: "center", justifyContent: "center" }}>
                            <Image source={require("../assets/kalender.png")} style={{ height: 150, width: 150, borderRadius: 15 }} />
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>Kalender</Text>
                            <Text style={{ color: "red", fontSize: 12, textAlign: "center" }} >Start From Rp.15000</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Product2")} style={{ height: 250, width: 150, alignItems: "center", justifyContent: "center", marginLeft: 20 }}>
                            <Image source={require("../assets/box.png")} style={{ height: 150, width: 150, borderRadius: 15 }} />
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>Lunch Box</Text>
                            <Text style={{ color: "red", fontSize: 12, textAlign: "center" }} >Start From Rp.15000</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* All PRODUCT */}
                <View style={{ marginLeft: 15, marginTop: 50, height:"100%", width:"100%", }}>
                    <Text style={{ fontSize: 20, color: "#042F77", fontWeight: "bold" }}>ALL PRODUCT</Text>
                    <View style={{ height: "100%", width: "100%", flexDirection: "row", flexWrap: "wrap", marginRight: 15 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Product3")} style={{ height: 250, width: 140, alignItems: "center", justifyContent: "center" }}>
                            <Image source={require("../assets/sur.png")} style={{ height: 120, width: 120, borderRadius: 10 }} />
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>Browsur</Text>
                            <Text style={{ color: "red", fontSize: 12, textAlign: "center" }} >Start From Rp.25000</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Product4")} style={{ height: 250, width: 140, alignItems: "center", justifyContent: "center", marginLeft: 20 }}>
                            <Image source={require("../assets/hang.png")} style={{ height: 120, width: 120, borderRadius: 15 }} />
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>Hang Tag</Text>
                            <Text style={{ color: "red", fontSize: 12, textAlign: "center" }} >Start From Rp.25000</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Product5")} style={{ height: 250, width: 140, alignItems: "center", justifyContent: "center", marginLeft: 20 }}>
                            <Image source={require("../assets/tag.png")} style={{ height: 120, width: 120, borderRadius: 15 }} />
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>Kartu Nama</Text>
                            <Text style={{ color: "red", fontSize: 12, textAlign: "center" }} >Start From Rp.25000</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Product6")} style={{ height: 250, width: 140, alignItems: "center", justifyContent: "center", marginLeft: 20 }}>
                            <Image source={require("../assets/card.png")} style={{ height: 120, width: 120, borderRadius: 15 }} />
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>Co Card</Text>
                            <Text style={{ color: "red", fontSize: 12, textAlign: "center" }} >Start From Rp.25000</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Product7")} style={{ height: 250, width: 140, alignItems: "center", justifyContent: "center", marginLeft: 20 }}>
                            <Image source={require("../assets/mmt.png")} style={{ height: 120, width: 120, borderRadius: 15 }} />
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 17 }}>MMT</Text>
                            <Text style={{ color: "red", fontSize: 12, textAlign: "center" }} >Start From Rp.25000</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                                <Image source={require("../assets/star.png")} style={{ height: 20, width: 20 }} />
                            </View>
                        </TouchableOpacity>
                      
                    </View>
                </View>
            </ScrollView>
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
export default Home;
