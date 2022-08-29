import React, { Component } from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class Splah extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount() {
        this.getDataToken()
    }

    getDataToken = async () => {
        try {
            const value = await AsyncStorage.getItem('@profile')
            if (value !== null) {
                setTimeout(() => {
                    this.props.navigation.replace('Home')
                }, 3000);
            }
            else {
                setTimeout(() => {
                    this.props.navigation.replace('Slide1')
                }, 3000);
            }
        } catch (e) {
            setTimeout(() => {
                this.props.navigation.replace('Slide1')
            }, 3000);
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: "100%",
        width: "100%",
        resizeMode: "contain"
    },
});

export default Splah;