//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground,PermissionsAndroid} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'; // Migration from 2.x.x to 3.x.x => showImagePicker API is removed.

// create a component
const Product4 = ({ navigation }) => {
    const [jenis, setJenis] = useState("")
    const [bahan, setBahan] = useState("")
    const [size, setSize] = useState("")
    const [count, setCount] = useState("")
    const [catatan, setCatatan] = useState("")
    const [image, setImage] = useState("")
    const [total, setTotal] = useState(25000)
    // jenis
    const [mata, setMata] = useState(false)
    const [jepit, setJepit] = useState(false)

    // bahan
    const [carton, setCarton] = useState(false)
    const [paper, setPaper] = useState(false)

    // size 
    const [size1, setSize1] = useState(false)
    const [size2, setSize2] = useState(false)

    // cetak
    const [pcs1, setPcs1] = useState(false)
    const [pcs2, setPcs2] = useState(false)

    const createPesanan = async () => {
        if (jenis.length == 0 || bahan.length || size.length == 0, count.length == 0) {
            alert("Minimal Jenis, Bahan, Size dan Jumlah terisi")
        } else {
            const data = {
                nama:"HANGTAG",
                jenis: jenis,
                bahan: bahan,
                size: size,
                jumlah: count,
                catatan: catatan,
                image: image,
                harga: total,
                alamat: ""
            }
            navigation.navigate("Checkout", { data: data })

            // Menyimpan ke async storage pemyimpan dimemory hp
            
        }
    }
    const selectPhotoTapped = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose Photo from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, (response) => { // Use launchImageLibrary to open image gallery
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.assets[0].uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                setImage(source.uri)
            }
        });
    }

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                selectPhotoTapped()
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };


    return (
        <View style={styles.container}>
              <ImageBackground
                source={require("../assets/bg.png")}
                style={{ flex: 1, }}
                resizeMode="cover"
            >
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
                <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>HANGTAG</Text>
            </TouchableOpacity>
            <View style={{ margin: 10, marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Pilihan Cetak Sisi</Text>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                    setMata(prev => !prev)
                    setJenis("Cetak 1 Muka")
                }}>
                    {mata == false ? <Image source={require("../assets/false.png")} style={{ height: 20, width: 20, marginRight: 10 }} /> : <Image source={require("../assets/true.png")} style={{ height: 20, width: 20, marginRight: 10 }} />}
                    <Text>Cetak 1 Muka</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                    setJepit(prev => !prev)
                    setJenis("Cetak 2 Muka")
                }}>
                    {jepit == false ? <Image source={require("../assets/false.png")} style={{ height: 20, width: 20, marginRight: 10 }} /> : <Image source={require("../assets/true.png")} style={{ height: 20, width: 20, marginRight: 10 }} />}
                    <Text>Cetak 2 Muka</Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 10, marginLeft: 25 }}>
                <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Pilihan Bahan</Text>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                    setCarton(prev => !prev)
                    setBahan("Art Carton 310")
                }}>
                    {carton == false ? <Image source={require("../assets/false.png")} style={{ height: 20, width: 20, marginRight: 10 }} /> : <Image source={require("../assets/true.png")} style={{ height: 20, width: 20, marginRight: 10 }} />}
                    <Text>Art Carton 310</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                    setPaper(prev => !prev)
                    setBahan("Art Paper 150")
                }}>
                    {paper == false ? <Image source={require("../assets/false.png")} style={{ height: 20, width: 20, marginRight: 10 }} /> : <Image source={require("../assets/true.png")} style={{ height: 20, width: 20, marginRight: 10 }} />}
                    <Text>Art Paper 150</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ margin: 10, marginLeft: 25 }}>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Pilihan Size</Text>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                        setSize1(prev => !prev)
                        setSize("6 X 6")
                    }}>
                        {size1 == false ? <Image source={require("../assets/false.png")} style={{ height: 20, width: 20, marginRight: 10 }} /> : <Image source={require("../assets/true.png")} style={{ height: 20, width: 20, marginRight: 10 }} />}
                        <Text>6 X 6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                        setSize2(prev => !prev)
                        setSize("9 X 5")
                    }}>
                        {size2 == false ? <Image source={require("../assets/false.png")} style={{ height: 20, width: 20, marginRight: 10 }} /> : <Image source={require("../assets/true.png")} style={{ height: 20, width: 20, marginRight: 10 }} />}
                        <Text>9 X 5</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 10, marginLeft: 25, marginRight: 50 }}>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Jumlah Cetak</Text>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                        setPcs1(prev => !prev)
                        setCount("350 Pcs")
                    }}>
                        {pcs1 == false ? <Image source={require("../assets/false.png")} style={{ height: 20, width: 20, marginRight: 10 }} /> : <Image source={require("../assets/true.png")} style={{ height: 20, width: 20, marginRight: 10 }} />}
                        <Text>350 Pcs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                        setPcs2(prev => !prev)
                        setCount("500 Pcs")
                    }}>
                        {pcs2 == false ? <Image source={require("../assets/false.png")} style={{ height: 20, width: 20, marginRight: 10 }} /> : <Image source={require("../assets/true.png")} style={{ height: 20, width: 20, marginRight: 10 }} />}
                        <Text>500 Pcs</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginLeft: 16, marginTop: 15, }}>
                <Text style={{ fontSize: 20, color: "#000", fontWeight: "bold" }}>Catatan:</Text>
                <TextInput
                    multiline={true}
                    style={{ height: 100, width: "90%", borderWidth: 1 }}
                    placeholder='Masukan catatan'
                    textAlignVertical='top'
                    onChangeText={(input) => setCatatan(input)}
                />
            </View>

            <View style={{ height: 200, width: "100%", flexDirection: "row", justifyContent: "space-around", marginTop: 25 }}>
                <View style={{ height: 100, width: "50%", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>Upload Desain</Text>
                    <TouchableOpacity onPress={() => requestCameraPermission()} >
                        <Image
                            source={require("../assets/add_image.png")}
                            style={{ height: 70, width: 70 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100, width: "50%", alignItems: "center", marginTop: 10 }}>
                    <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold", }}>Total Harga</Text>
                    <Text style={{ paddingTop: 20, color: "#000", fontWeight: "bold", fontSize: 20 }} >Rp {total}</Text>
                </View>
            </View>
            <View style={{ height: 200, width: '100%', alignItems: "center", justifyContent: "center" }}>
                    {image.length == 0 ?
                        null :
                        <Image
                            source={{ uri: image }}
                            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
                        />
                    }
                </View>
            <TouchableOpacity onPress={() => createPesanan()} style={{ height: 50, width: "50%", backgroundColor: "#2F632C", alignItems: "center", justifyContent: "center", borderRadius: 25, marginTop: 20, position: "absolute", bottom: 10, right: 10 }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, textAlign: "center" }} >Buat Pesanan </Text>
            </TouchableOpacity>
            </ImageBackground>
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
export default Product4;
