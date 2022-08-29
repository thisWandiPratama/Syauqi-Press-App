//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// create a component
const Orderan = ({ navigation }) => {
    const [orderan, setOrderan] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        // await AsyncStorage.removeItem('@orderan')
        try {
            const jsonValue = await AsyncStorage.getItem('@orderan')
            if (jsonValue != null) {
                setOrderan(JSON.parse(jsonValue))
                console.log(JSON.parse(jsonValue))
            }

        } catch (e) {
        }
    }

    const orderanList = () => {
        return orderan.map((value, index) => {
            return (
                <View key={index} style={{
                    height: 250, width: "90%", borderBottomWidth: 1, borderBottomColor: "#aeaeae", shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.00,

                    elevation: 1,
                    padding: 10,
                    marginBottom:10
                }}>
                    <Text style={{ color: "#000", fontSize: 30, fontWeight: "bold" }}>{value.nama}</Text>
                    <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }} >{value.jenis}</Text>
                    <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }}>{value.bahan}</Text>
                    <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }}>{value.size}</Text>
                    <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }}>{value.jumlah}</Text>
                    <Text style={{ color: "#000", fontSize: 25, marginBottom: 5, color:"red"}}>Rp. {value.harga}</Text>
                    <Text style={{ color: "#000", fontSize: 20, marginBottom: 5 }}>{value.catatan}</Text>
                </View>
            )
        })
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
                <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Orderan Masuk</Text>
            </TouchableOpacity>
            {
                orderan.length == 0 ?
                    <View style={{ height: 100, width: "100%", alignItems: "center" }}>
                        <Text>Tidak ada orderan</Text>
                    </View>
                    :
                    <ScrollView>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {orderanList()}
                        </View>
                    </ScrollView>
            }
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
export default Orderan;
