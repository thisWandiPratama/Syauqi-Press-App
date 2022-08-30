//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

// create a component
const Payment = ({ navigation, route }) => {
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
                    <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Payment Gateway</Text>
                </TouchableOpacity>
                <View style={{ height: 120, borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 25, marginLeft: 10, color: "#000", fontWeight: "bold" }}>Detail Pembayaran </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "red", marginLeft: 10, marginTop: 10, }}>Total Harus Dibayar</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 15, color: "#000", marginLeft: 10, marginTop: 10 }}>Rp. {route.params.data.harga}</Text>
                </View>
                <View style={{ height: 400, width: "100%", alignItems: "center", marginTop: 40 }}>
                    <Image
                        source={require("../assets/pay.png")}
                        style={{
                            height: 300,
                            width: 300,
                            resizeMode: "contain"
                        }}
                    />
                </View>
                <View style={{ width: "100%", alignItems: "center", marginTop: 200 }}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://api.whatsapp.com/send?text=Halo,%20Admin.%20Saya%20sudah%20melakukan%20pembayaran%20untuk%20pesanan%20saya.%20Berikut%20saya%20lampirkan%20bukti%20transfer%20pembayaran&phone=6285889072341')} style={{ height: 50, width: "80%", backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 25, marginTop: 20 }}>
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
export default Payment;
