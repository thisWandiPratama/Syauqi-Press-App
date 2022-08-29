import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Slide2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* logo */}
            <Image
                source={require("../assets/motor.png")}
                style={{ height: "60%", width: "60%", resizeMode: "contain" }}
            />
            <Text style={{ color: "#000", fontSize: 40, fontWeight: "bold" }}>Free Ongkir</Text>
            <Text style={{ color: "#000", fontSize: 20 }} >Kirim ke Area Semarang tanpa takut ongkir mahal</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ height: 50, width: "80%", backgroundColor: "#2F632C", alignItems: "center", justifyContent: "center", borderRadius: 25, marginTop: 20 }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >MULAI </Text>
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

export default Slide2;
