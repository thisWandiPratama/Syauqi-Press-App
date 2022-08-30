//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Checkout = ({ navigation, route }) => {
    const [database, setDatabase] = useState([])
    const [alamat, setAlamat] = useState("")

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@orderan')
            if (jsonValue != null) {
                setDatabase(JSON.parse(jsonValue))
            }

        } catch (e) {
        }
    }

    const checkuout = async () => {
        if (alamat.length == 0) {
            alert("Alamat pengiriman wajib diisi")
        } else {
            const data = route.params.data
            data.alamat = alamat
            console.log(data)
            const save = [...database, data]
            console.log(save)
            const jsonValue = JSON.stringify(save)
            await AsyncStorage.setItem('@orderan', jsonValue)
            navigation.navigate("Payment", { data: data })
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
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
                    <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Checkout</Text>
                </TouchableOpacity>
                <View style={{ height: 500, alignItems: "center" }}>
                    <View style={{ height: 190, width: "90%" }}>
                        <View style={{ flexDirection: "row", marginTop: 18, height: 40 }}>
                            <Image
                                source={require("../assets/map.png")}
                                style={{
                                    height: 30,
                                    width: 30,
                                    marginRight: 5
                                }}
                            />
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }} >Alamat Pengiriman</Text>
                        </View>
                        <View style={{ height: 120, width: "100%" }}>
                            <TextInput
                                placeholder='Masukan alamat pengiriman'
                                style={{
                                    height: 100,
                                    width: "90%",
                                    borderWidth: 1.5,
                                    borderColor: "#000",
                                    color:"#000"
                                }}
                                multiline={true}
                                textAlignVertical='top'
                                onChangeText={input => setAlamat(input)}
                            />
                        </View>
                    </View>
                    <View style={{ height: 250, width: "90%" }}>
                        <View style={{ flexDirection: "row", marginTop: 18, height: 40 }}>
                            <Image
                                source={require("../assets/map.png")}
                                style={{
                                    height: 30,
                                    width: 30,
                                    marginRight: 5
                                }}
                            />
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }} >Rincian Pemesanan</Text>
                        </View>
                        <View style={{ height: "90%", width: "100%" }}>
                            <View style={{
                                height: "100%",
                                width: "90%",
                                borderWidth: 1.5,
                                borderColor: "#000"
                            }}
                            >
                                <Text style={{ color: "#000", fontSize: 30, fontWeight: "bold" }}>{route.params.data.nama}</Text>
                                <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }} >{route.params.data.jenis}</Text>
                                <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }}>{route.params.data.bahan}</Text>
                                <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }}>{route.params.data.size}</Text>
                                <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }}>{route.params.data.jumlah}</Text>
                                <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }}>{route.params.data.catatan}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 50, width: "100%", borderBottomWidth: 1 }}>
                    <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", color: "green" }}>Desain  berhasil diupload</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>Total Harus Dibayar</Text>
                    <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>Rp {route.params.data.harga}</Text>
                </View>
                <View style={{ width: "100%", alignItems: "center", marginTop: 200 }}>
                    <TouchableOpacity onPress={() => checkuout()} style={{ height: 50, width: "80%", backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 25, marginTop: 20 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >KONFIRMASI</Text>
                    </TouchableOpacity>
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
export default Checkout;
