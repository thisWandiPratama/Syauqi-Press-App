import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Slide1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* logo */}
            <Image
                source={require("../assets/best.png")}
                style={{ height: "60%", width: "60%", resizeMode: "contain" }}
            />
            <Text style={{ color: "#000", fontSize: 40, fontWeight: "bold" }}>Best Product</Text>
            <Text style={{ color: "#000", fontSize: 20 }} >Produk terbaik dengan harga terjangkau</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Slide2")} style={{ height: 50, width: "80%", backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 25, marginTop: 20 }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >LANJUTKAN </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ height: 50, width: "80%", backgroundColor: "#2F632C", alignItems: "center", justifyContent: "center", borderRadius: 25, marginTop: 20 }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >LEWATI PERKENALAN </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
    },
});

export default Slide1;
